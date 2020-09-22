import React, { FC, useEffect, useState, useRef } from "react";
import { View, Image, ScrollView } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { StyleSheet, BackHandler } from "react-native";
import type { Dispatch } from "redux";
import type { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import {
  setShouldDisplayBottomNav,
  setShouldNavigate,
} from "../../actions/bottomNav";
import { setAllPhotoListData } from "../../actions/allPhoto";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import { postFirebaseStorage } from "../../firebase/postFirebaseStorage";
import { postFireStore } from "../../firebase/postFireStore";
import { callingAlert } from "../../utilities/alert";
import { setAspectRatioIntoState } from "../../utilities/imageAspect";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import firebase from "firebase";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import env from "../../../env.json";
import Post from "../../components/organisms/Post";
import PaperAirplaneSvg from "../../components/atoms/svg/PaperAirplaneSvg";
import Spinner from "react-native-loading-spinner-overlay";

type Location = {
  latitude?: number;
  longitude?: number;
  address: string;
};

type DocumentData = firebase.firestore.DocumentData;

type Props = {
  navigation: NavigationProp<Record<string, object>>;
};

const moveToPreviousTab = async (dispatch: Dispatch) => {
  // 投稿前に滞在していた画面に遷移
  dispatch(setShouldDisplayBottomNav(true));
  dispatch(setShouldNavigate(true));
};

const getNowLocation = async (): Promise<{
  latitude: number | null;
  longitude: number | null;
}> => {
  try {
    await Permissions.askAsync(Permissions.LOCATION);
    const location = await Location.getCurrentPositionAsync({});
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    return { latitude, longitude };
  } catch {
    return { latitude: null, longitude: null };
  }
};

const getLocationAddressAsync = async (
  set: React.Dispatch<React.SetStateAction<Location>>,
  latitude: number,
  longitude: number
) => {
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

const checkError = (
  uid: string,
  uri: string,
  photogenicSubject: string,
  location: Location
): string | false => {
  if (!uid)
    return "ユーザーを認識できませんでした。もう一度投稿し直してください。";
  if (!uri) return "画像を認識できません。もう一度投稿し直してください。";
  if (!photogenicSubject) return "被写体の名称を入力してください。";
  if (
    location.latitude === undefined ||
    location.longitude === undefined ||
    location.address === "撮影場所を選択"
  )
    return "位置情報を選択してください。";
  return false;
};

const uploadToStorage = async (
  uid: string,
  uri: string
): Promise<{ url: string | null; filename: string | null }> => {
  const { uploadRef: ref, filename } = postFirebaseStorage.getUploadRef(uid);
  const storageResult = await postFirebaseStorage.uploadPostImage(ref, uri);
  if (storageResult === "error") return { url: null, filename: null };
  const url = await postFirebaseStorage.getImageUrl(ref);
  if (url === "error") return { url: null, filename: null };
  return { url, filename };
};

const uploadToFirestore = async (
  uid: string,
  url: string,
  photogenicSubject: string,
  location: Location,
  filename: string
): Promise<undefined | DocumentData> => {
  if (location.latitude === undefined) return;
  if (location.longitude === undefined) return;
  const firestoreResult = await postFireStore.addImageData({
    latitude: location.latitude,
    longitude: location.longitude,
    uid,
    url,
    photogenicSubject,
    filename,
  });
  const docId = firestoreResult.docId;
  if (firestoreResult.state === "error" || docId === undefined) return;
  const photoDataResult = await postFireStore.getPhotoData(docId);
  const data = photoDataResult.data;
  if (photoDataResult.state === "error" || data === undefined) {
    // エラーの時の処理はどうしようか悩んでいるので保留
    // アプリの再起動をかけるべき?
    return;
  }
  return data;
};

const uploadPostImage = async (
  uid: string,
  uri: string,
  photogenicSubject: string,
  location: Location
): Promise<undefined | DocumentData> => {
  const { url, filename } = await uploadToStorage(uid, uri);
  if (!url || !filename) return;
  const data = await uploadToFirestore(
    uid,
    url,
    photogenicSubject,
    location,
    filename
  );
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
  newAllPhotos.push(photoData);
  dispatch(setAllPhotoListData(newAllPhotos));
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { uri, type } = useSelector((state: RootState) => state.postReducer);
  const [location, setLocation] = useState<Location>({
    address: "撮影場所を選択",
  });
  const [photogenicSubject, setPhotogenicSubject] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisable] = useState<boolean>(false);
  const [isPressing, setIsPressing] = useState<boolean>(false);
  const [spaceHeight, setSpaceHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  const [shouldShowPreview, setShouldShowPreview] = useState<boolean>(false);
  const [containerAspect, setContainerAspect] = useState({
    width: 1,
    height: 1,
  });
  const uid = useSelector((state: RootState) => state.userReducer.uid);
  const allPhotoDataList = useSelector(
    (state: RootState) => state.allPhotoReducer.allPhotoDataList
  );
  const myPhotoDataList = useSelector(
    (state: RootState) => state.myPhotoReducer.photoDataList
  );
  const locationData = useSelector(
    (state: RootState) => state.PostPhotoReducer
  );

  // 閉じるボタン押下時の処理
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => moveToPreviousTab(dispatch)}
          style={styles.headerBtn}
        >
          <FontAwesome name="times" style={styles.crossBtnIcon} />
        </TouchableOpacity>
      ),
    });
  }, []);

  // 位置情報を取得
  useEffect(() => {
    (() => {
      if (locationData.latitude === undefined) return;
      if (locationData.longitude === undefined) return;
      getLocationAddressAsync(
        setLocation,
        locationData.latitude,
        locationData.longitude
      );
    })();
  }, [locationData]);

  // 投稿情報を初期化
  useEffect(() => {
    dispatch(setShouldDisplayBottomNav(false));
    setIsDisable(false);
    setPhotogenicSubject("");
    setLocation({ address: "撮影場所を選択" });
    setAspectRatioIntoState(uri, setAspectRatio);
    if (type === "camera") {
      (async () => {
        const location = await getNowLocation();
        if (!location.latitude || !location.longitude) return;
        getLocationAddressAsync(
          setLocation,
          location.latitude,
          location.longitude
        );
      })();
    }
  }, [uri]);

  // 投稿ボタン押下時の処理を定義
  useEffect(() => {
    const onPress = async () => {
      if (isLoading || isDisabled) return;
      setIsLoading(true);
      setIsDisable(true);

      const error = await checkError(uid, uri, photogenicSubject, location);
      if (error) {
        setIsLoading(false);
        setIsDisable(false);
        callingAlert(error);
        return;
      }

      const photoData = await uploadPostImage(
        uid,
        uri,
        photogenicSubject,
        location
      );

      if (!photoData) {
        setIsLoading(false);
        setIsDisable(false);
        callingAlert("投稿に失敗しました");
        return;
      }

      const selectedPhotoData = { allPhotoDataList, myPhotoDataList };
      dispatchPhotoData(dispatch, selectedPhotoData, photoData);
      console.log(photoData.photo_id); // 本番では削除
      navigation.navigate("postedImageDetail", {
        imageData: {
          ...photoData,
          aspectRatio,
        },
        shouldHeaderLeftBeCross: true,
      });
      setIsLoading(false);
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => onPress()}
          onPressIn={() => {
            setIsPressing(true);
          }}
          onPressOut={() => setIsPressing(false)}
          disabled={isDisabled}
        >
          <View
            style={[
              styles.headerBtn,
              isPressing ? { opacity: 0.6 } : { opacity: 1 },
            ]}
          >
            <View style={styles.postBtnIcon}>
              <PaperAirplaneSvg color={baseColor.accent} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ),
    });
  }, [uid, uri, photogenicSubject, location, isDisabled, isPressing]);

  const scrollViewRef = useRef<null | ScrollView>(null);
  const handleContentSizeChange = (width, height) => {
    // TextInputがキーボードで隠れてしまう問題の対策
    if (spaceHeight === 0) return;
    scrollViewRef.current?.scrollTo({
      y: height - spaceHeight,
    });
  };

  const onPressAndroidBack = () => {
    moveToPreviousTab(dispatch);
    return true;
  };
  BackHandler.addEventListener("hardwareBackPress", onPressAndroidBack);

  return (
    <>
      <Post
        uri={uri}
        address={location.address}
        aspectRatio={aspectRatio}
        scrollViewRef={scrollViewRef}
        setSpaceHeight={setSpaceHeight}
        handleContentSizeChange={handleContentSizeChange}
        photogenicSubject={photogenicSubject}
        setPhotogenicSubject={setPhotogenicSubject}
        navigation={navigation}
        shouldShowPreview={shouldShowPreview}
        setShouldShowPreview={setShouldShowPreview}
        containerAspect={containerAspect}
        setContainerAspect={setContainerAspect}
      />
      <Spinner
        visible={isLoading}
        textContent="投稿中..."
        textStyle={{ color: "#fff", fontSize: 13 }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </>
  );
};

const postBtnViewBoxRatio = 1;

const styles = StyleSheet.create({
  // 閉じるボタン
  headerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
  },
  // 閉じるボタン内のアイコン
  crossBtnIcon: {
    color: baseColor.text,
    fontSize: wp("5.6%"),
    fontWeight: "bold",
  },
  // 投稿ボタン内のアイコン
  postBtnIcon: {
    width: wp("5.5%"),
    aspectRatio: postBtnViewBoxRatio,
  },
});

export default PostContainer;
