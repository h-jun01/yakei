import React, { FC, useEffect, useState } from "react";
import { TouchableOpacity, Alert, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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

const getLocationAddressAsync = async () => {
  await Permissions.askAsync(Permissions.LOCATION);
  const location = await Location.getCurrentPositionAsync({});
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  const api = env.GOOGLE_CLOUD_PLATFORM_ID;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api}`;
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data.results[2]);
      });
  });
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { uri, type } = useSelector((state: RootState) => state.postReducer);
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  Image.getSize(
    uri,
    (width, height) => {
      setAspectRatio(height / width);
    },
    (error) => {
      console.log(error);
    }
  );

  const onPressOfCamera = async () => {
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

  const onPressOfAlbum = async () => {
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

  useEffect(() => {
    dispatch(setShouldDisplayBottomNav(false));
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={type === "camera" ? onPressOfCamera : onPressOfAlbum}
        >
          <FontAwesome name="times" style={styles.crossButton} />
        </TouchableOpacity>
      ),
    });
  }, [type]);

  if (type === "camera") {
    (async () => {
      const test = await getLocationAddressAsync();
      console.log(test);
    })();
  }

  return <Post uri={uri} aspectRatio={aspectRatio} />;
};

export default PostContainer;
