import React, { FC, useRef, useState } from "react";
import { Animated, Alert, Platform } from "react-native";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { NavigationState } from "@react-navigation/routers/lib/typescript/src/types";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { setPostData } from "../../actions/post";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";
import { deviceWidth, iPhone11Width } from "../../utilities/dimensions";

type Props = {
  state: BottomTabBarProps["state"];
  routes: NavigationState["routes"];
  navigation: BottomTabBarProps["navigation"];
};

const useAnimation = () => {
  const shouldAppear = useSelector(
    (state: RootState) => state.postBtnsReducer.shouldAppear
  );
  const animation = useRef(new Animated.Value(0)).current;

  if (shouldAppear) {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  if (Platform.OS === "android") {
    const iconAspectRatio = 54 / iPhone11Width;
    const horizonRatio = 15 / iPhone11Width;
    const bottomRatio = 30 / iPhone11Width;
    const iconAspect = deviceWidth * iconAspectRatio;
    const horizon = deviceWidth * horizonRatio;
    const bottom = deviceWidth * bottomRatio;

    const horizonInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-iconAspect / 2, horizon],
    });
    const bottomInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-iconAspect / 2, bottom],
    });

    const animStyle = {
      UpperLeft: {
        marginBottom: bottomInterpolate,
        marginRight: horizonInterpolate,
      },
      UpperRight: {
        marginBottom: bottomInterpolate,
        marginLeft: horizonInterpolate,
      },
    };
    return animStyle;
  } else {
    const horizonInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["50%", "-30%"],
    });
    const bottomInterpolate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "120%"],
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
  }
};

const navigateToPostScreen = (props: Props) => {
  const { state, routes, navigation } = props;
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

const CameraAlbumWrapContainer: FC<Props> = ({ ...props }) => {
  const { state, routes, navigation } = props;
  const dispatch = useDispatch();
  const animStyle = useAnimation();
  const [cameraOpacity, setCameraOpacity] = useState(1);
  const [albumOpacity, setAlbumOpacity] = useState(1);

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
      dispatch(setPostData(result.uri, "camera"));
      navigateToPostScreen({ state, routes, navigation });
      dispatch(setShouldAppearPostBtns(false));
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
      dispatch(setPostData(result.uri, "album"));
      navigateToPostScreen({ state, routes, navigation });
      dispatch(setShouldAppearPostBtns(false));
    }
  };

  return (
    <CameraAlbumWrap
      animStyle={animStyle}
      cameraOpacity={cameraOpacity}
      albumOpacity={albumOpacity}
      setCameraOpacity={setCameraOpacity}
      setAlbumOpacity={setAlbumOpacity}
      onPressOfCamera={onPressOfCamera}
      onPressOfAlbum={onPressOfAlbum}
    />
  );
};

export default CameraAlbumWrapContainer;
