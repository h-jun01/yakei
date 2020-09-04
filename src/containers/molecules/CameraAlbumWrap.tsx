import React, { FC, useRef } from "react";
import { Animated } from "react-native";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { NavigationState } from "@react-navigation/routers/lib/typescript/src/types";
import * as ImagePicker from "expo-image-picker";
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
  const animStyle = useAnimation();

  const getOnPressFunc = (index: number): (() => void) => {
    const isFocused = state.index === index;
    const route = routes[index];

    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route["key"],
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route["name"]);
      }
    };

    return onPress;
  };

  // const onPressOfAlbum = getOnPressFunc(6);

  const dispatch = useDispatch();

  const onPressOfCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      dispatch(setPostData(result.uri));
      getOnPressFunc(5)();
    }
  };

  return (
    <CameraAlbumWrap animStyle={animStyle} onPressOfCamera={onPressOfCamera} />
  );
};

export default CameraAlbumWrapContainer;
