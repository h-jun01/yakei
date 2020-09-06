import React, { FC, useEffect, useState, useRef } from "react";
import { TouchableOpacity, Alert, Image, ScrollView } from "react-native";
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
import { setshouldNavigateMap } from "../../actions/mapNavigate";
import env from "../../../env.json";
import { styles } from "../../styles/post";
import Post from "../../components/organisms/Post";

type Props = {
  navigation: NavigationProp<Record<string, object>>;
};

const getImageSize = (
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
    dispatch(setshouldNavigateMap(true));
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
    dispatch(setshouldNavigateMap(true));
  } else {
    dispatch(setPostData(result.uri, "camera"));
  }
};

const getLocationAddressAsync = async (
  set: React.Dispatch<React.SetStateAction<string>>
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
        set(address);
      }
    });
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { uri, type } = useSelector((state: RootState) => state.postReducer);
  const [aspectRatio, setAspectRatio] = useState<number>(0);
  getImageSize(uri, setAspectRatio);

  useEffect(() => {
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

  const [address, setAddress] = useState<string>("撮影場所を入力");
  useEffect(() => {
    if (type === "camera") {
      getLocationAddressAsync(setAddress);
    } else {
      setAddress("撮影場所を入力");
    }
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
      address={address}
      aspectRatio={aspectRatio}
      scrollViewRef={scrollViewRef}
      setSpaceHeight={setSpaceHeight}
      handleContentSizeChange={handleContentSizeChange}
    />
  );
};

export default PostContainer;
