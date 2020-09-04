import React, { FC, useRef } from "react";
import { Animated, Alert } from "react-native";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { NavigationState } from "@react-navigation/routers/lib/typescript/src/types";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { setPostData } from "../../actions/post";

type Props = {
  state: BottomTabBarProps["state"];
  routes: NavigationState["routes"];
  navigation: BottomTabBarProps["navigation"];
};

const animateStart = (anim, toValue) => {
  Animated.timing(anim, {
    toValue: toValue,
    duration: 200,
    useNativeDriver: false,
  }).start();
};

const useAnimation = () => {
  const isAppeared = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.isAppeared
  );
  const moveUpperLeftAnim = useRef(new Animated.Value(0)).current;
  const moveUpperRightAnim = useRef(new Animated.Value(0)).current;

  if (isAppeared) {
    animateStart(moveUpperLeftAnim, 1);
    animateStart(moveUpperRightAnim, 1);
  } else {
    animateStart(moveUpperLeftAnim, 0);
    animateStart(moveUpperRightAnim, 0);
  }

  const horizonInterpolate = moveUpperRightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "-30%"],
  });
  const bottomInterpolate = moveUpperLeftAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  const animStyle = {
    UpperLeft: {
      bottom: bottomInterpolate,
      left: horizonInterpolate,
    },
    UpperRight: {
      bottom: bottomInterpolate,
      right: horizonInterpolate,
    },
  };

  return animStyle;
};

const CameraAlbumWrapContainer: FC<Props> = ({ ...props }) => {
  const { state, routes, navigation } = props;
  const dispatch = useDispatch();
  const animStyle = useAnimation();

  const navigateToPostScreen = () => {
    const isFocused = state.index === 5;
    const route = routes[5];

    const event = navigation.emit({
      type: "tabPress",
      target: route["key"],
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route["name"]);
    }
  };

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

    if (!result.cancelled) {
      dispatch(setPostData(result.uri));
      navigateToPostScreen();
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

    if (!result.cancelled) {
      dispatch(setPostData(result.uri));
      navigateToPostScreen();
    }
  };

  return (
    <CameraAlbumWrap
      animStyle={animStyle}
      onPressOfCamera={onPressOfCamera}
      onPressOfAlbum={onPressOfAlbum}
    />
  );
};

export default CameraAlbumWrapContainer;
