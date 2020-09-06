import React, { FC, useEffect, useState, useRef } from "react";
import { View, TouchableOpacity, Alert, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "redux";
import type { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RootState } from "../../reducers/index";
import { setPostData } from "../../actions/post";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { setShouldNavigateMap } from "../../actions/mapNavigate";
import env from "../../../env.json";
import { styles } from "../../styles/post";
import { baseColor } from "../../styles/thema/colors";
import { postFirebaseStorage } from "../../firebase/postFirebaseStorage";
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

const uploadPostImage = async (uid: string, uri: string) => {
  const ref = postFirebaseStorage.getUploadRef(uid);
  const uploadedResult = await postFirebaseStorage.uploadPostImage(ref, uri);
  if (uploadedResult === "error") {
    callingAlert("投稿に失敗しました");
    return;
  }
  const imageUrl = await postFirebaseStorage.getImageUrl(ref);
  if (imageUrl === "error") {
    callingAlert("投稿に失敗しました");
    return;
  }
  console.log(imageUrl);
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { uri, type } = useSelector((state: RootState) => state.postReducer);
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  assignImageAspectRatio(uri, setAspectRatio);

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

  const [location, setLocation] = useState<Location>({
    address: "撮影場所を入力",
  });
  const uid = useSelector((state: RootState) => state.userReducer.uid);

  useEffect(() => {
    // マウント時 & uriが異なる時に実行
    if (type === "camera") {
      getLocationAddressAsync(setLocation);
    } else {
      setLocation({ address: "撮影場所を入力" });
    }
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => uploadPostImage(uid, uri)}
        >
          <View style={styles.postBtn}>
            <PaperAirplaneSvg color={baseColor.text} />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [uri]);

  const [spaceHeight, setSpaceHeight] = useState(0);
  const scrollViewRef = useRef<null | ScrollView>(null);
  const handleContentSizeChange = (width, height) => {
    if (spaceHeight === 0) return;
    scrollViewRef.current?.scrollTo({
      y: height - spaceHeight,
    });
  };

  return (
    <Post
      uri={uri}
      address={location.address}
      aspectRatio={aspectRatio}
      scrollViewRef={scrollViewRef}
      setSpaceHeight={setSpaceHeight}
      handleContentSizeChange={handleContentSizeChange}
    />
  );
};

export default PostContainer;
