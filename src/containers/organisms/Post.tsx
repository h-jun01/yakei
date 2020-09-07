import React, { FC, useEffect, useState, useRef } from "react";
import { View, TouchableOpacity, Alert, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "redux";
import firebase from "firebase";
import type { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RootState } from "../../reducers/index";
import { setPostData } from "../../actions/post";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { setShouldNavigateMap } from "../../actions/mapNavigate";
import { setPhotoListData } from "../../actions/photo";
import { setAllPhotoListData } from "../../actions/allPhoto";
import env from "../../../env.json";
import { styles } from "../../styles/post";
import { baseColor } from "../../styles/thema/colors";
import { postFirebaseStorage } from "../../firebase/postFirebaseStorage";
import { postFireStore } from "../../firebase/postFireStore";
import { callingAlert } from "../../utilities/alert";
import Post from "../../components/organisms/Post";
import PaperAirplaneSvg from "../../components/atoms/svg/PaperAirplaneSvg";

type Props = {
  navigation: NavigationProp<Record<string, object>>;
};
type Location = {
  latitude?: number;
  longitude?: number;
  address: string;
};
type DocumentData = firebase.firestore.DocumentData;

const assignImageAspectRatio = (
  uri: string,
  set: React.Dispatch<React.SetStateAction<number>>
) => {
  Image.getSize(
    uri,
    (width, height) => {
      set(height / width);
    },
    (error) => {
      console.log(error);
    }
  );
};

const onPressOfAlbum = async (dispatch: Dispatch) => {
  // アルバムへのアクセス許可を申請
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== "granted") {
    Alert.alert(
      "",
      "端末の[設定]＞[YAKEI]で、写真へのアクセスを許可してください。"
    );
    return;
  }
  // アルバムの起動
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (result.cancelled) {
    dispatch(setShouldDisplayBottomNav(true));
    dispatch(setShouldNavigateMap(true));
  } else {
    dispatch(setPostData(result.uri, "album"));
  }
};

const onPressOfCamera = async (dispatch: Dispatch) => {
  // カメラへのアクセス許可を申請
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  if (status !== "granted") {
    Alert.alert(
      "",
      "端末の[設定]＞[YAKEI]で、カメラへのアクセスを許可してください。"
    );
    return;
  }
  // カメラの起動
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: false,
  });

  if (result.cancelled) {
    dispatch(setShouldDisplayBottomNav(true));
    dispatch(setShouldNavigateMap(true));
  } else {
    dispatch(setPostData(result.uri, "camera"));
  }
};

const getLocationAddressAsync = async (
  set: React.Dispatch<React.SetStateAction<Location>>
) => {
  await Permissions.askAsync(Permissions.LOCATION);
  const location = await Location.getCurrentPositionAsync({});
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  const api = env.GOOGLE_CLOUD_PLATFORM_ID;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const address = data.results[0].formatted_address;
      if (typeof address === "string") {
        set({
          latitude: latitude,
          longitude: longitude,
          address: address,
        });
      }
    });
};

const checkHasError = (
  uid: string,
  uri: string,
  photogenicSubject: string,
  location: Location
) => {
  if (!uid) {
    callingAlert(
      "ユーザーを認識できませんでした。もう一度投稿し直してください。"
    );
    return true;
  } else if (!uri) {
    callingAlert("画像を認識できません。もう一度投稿し直してください。");
    return true;
  } else if (!photogenicSubject) {
    callingAlert("被写体の名称を入力してください。");
    return;
  } else if (
    location.latitude === undefined ||
    location.longitude === undefined ||
    location.address === "撮影場所を入力"
  ) {
    callingAlert("位置情報を選択してください。");
    return true;
  } else {
    return false;
  }
};

const uploadPostImage = async (
  uid: string,
  uri: string,
  photogenicSubject: string,
  location: Location
): Promise<undefined | DocumentData> => {
  const ref = postFirebaseStorage.getUploadRef(uid);
  const storageResult = await postFirebaseStorage.uploadPostImage(ref, uri);
  if (storageResult === "error") {
    callingAlert("投稿に失敗しました");
    return;
  }
  const url = await postFirebaseStorage.getImageUrl(ref);
  if (url === "error") {
    callingAlert("投稿に失敗しました");
    return;
  }
  if (location.latitude === undefined) return;
  if (location.longitude === undefined) return;
  const firestoreResult = await postFireStore.addImageData({
    latitude: location.latitude,
    longitude: location.longitude,
    uid,
    url,
    photogenicSubject,
  });
  const docId = firestoreResult.docId;
  if (firestoreResult.state === "error" || docId === undefined) {
    callingAlert("投稿に失敗しました");
    return;
  }
  const photoDataResult = await postFireStore.getPhotoData(docId);
  const data = photoDataResult.data;
  if (photoDataResult.state === "error" || data === undefined) {
    // エラーの時の処理はどうしようか悩んでいるので保留
    // アプリの再起動をかけるべき?
    return;
  }
  return data;
};

const dispatchPhotoData = (
  dispatch: Dispatch,
  selectedPhotoData: {
    allPhotoDataList: DocumentData[];
    myPhotoDataList: DocumentData[];
  },
  photoData: DocumentData
) => {
  const newAllPhotos = selectedPhotoData.allPhotoDataList.slice();
  const newMyPhotos = selectedPhotoData.myPhotoDataList.slice();
  newAllPhotos.push(photoData);
  newMyPhotos.push(photoData);
  dispatch(setAllPhotoListData(newAllPhotos));
  dispatch(setPhotoListData(newMyPhotos));
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { uri, type } = useSelector((state: RootState) => state.postReducer);
  const [location, setLocation] = useState<Location>({
    address: "撮影場所を入力",
  });
  const [spaceHeight, setSpaceHeight] = useState(0);
  const [photogenicSubject, setPhotogenicSubject] = useState("");
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const uid = useSelector((state: RootState) => state.userReducer.uid);
  const allPhotoDataList = useSelector(
    (state: RootState) => state.allPhotoReducer.allPhotoDataList
  );
  const myPhotoDataList = useSelector(
    (state: RootState) => state.myPhotoReducer.photoDataList
  );

  useEffect(() => {
    // マウント時 & uriが異なる時に実行
    if (type === "camera") {
      getLocationAddressAsync(setLocation);
    } else {
      setLocation({ address: "撮影場所を入力" });
    }
  }, [uri]);

  useEffect(() => {
    // マウント時 & uid, uri, 被写体の名称、位置情報が異なる時に実行
    const onPress = async () => {
      const hasError = checkHasError(uid, uri, photogenicSubject, location);
      if (hasError) return;
      const photoData = await uploadPostImage(
        uid,
        uri,
        photogenicSubject,
        location
      );
      if (!photoData) return;
      const selectedPhotoData = { allPhotoDataList, myPhotoDataList };
      dispatchPhotoData(dispatch, selectedPhotoData, photoData);
      console.log(photoData.photo_id);
      navigation.navigate("postedImageDetail", photoData);
    };
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress()}>
          <View style={styles.postBtn}>
            <PaperAirplaneSvg color={baseColor.text} />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [uid, uri, photogenicSubject, location]);

  useEffect(() => {
    // マウント時 & typeが異なる時に実行
    dispatch(setShouldDisplayBottomNav(false));
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={
            type === "camera"
              ? () => onPressOfCamera(dispatch)
              : () => onPressOfAlbum(dispatch)
          }
        >
          <FontAwesome name="times" style={styles.crossButton} />
        </TouchableOpacity>
      ),
    });
  }, [type]);

  const scrollViewRef = useRef<null | ScrollView>(null);
  const handleContentSizeChange = (width, height) => {
    if (spaceHeight === 0) return;
    scrollViewRef.current?.scrollTo({
      y: height - spaceHeight,
    });
  };

  assignImageAspectRatio(uri, setAspectRatio);

  return (
    <Post
      uri={uri}
      address={location.address}
      aspectRatio={aspectRatio}
      scrollViewRef={scrollViewRef}
      setSpaceHeight={setSpaceHeight}
      handleContentSizeChange={handleContentSizeChange}
      setPhotogenicSubject={setPhotogenicSubject}
    />
  );
};

export default PostContainer;
