import React, { FC, useRef, useEffect } from "react";
import { Animated } from "react-native";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";

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

const CameraAlbumWrapContainer: FC = () => {
  const animStyle = useAnimation();

  return <CameraAlbumWrap animStyle={animStyle} />;
};

export default CameraAlbumWrapContainer;
