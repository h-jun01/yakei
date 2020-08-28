import React, { FC, useRef } from "react";
import { Animated } from "react-native";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import { app } from "firebase";

const CameraAlbumWrapContainer: FC = () => {
  const shoulappear = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.shouldAppear
  );
  const moveUpperLeftAnim = useRef(new Animated.Value(0)).current;
  const moveUpperRightAnim = useRef(new Animated.Value(0)).current;

  if (shoulappear) {
    Animated.timing(moveUpperLeftAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(moveUpperLeftAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const interpolateLeft = moveUpperLeftAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "-45%"],
  });

  const interpolateBottom = moveUpperLeftAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "110%"],
  });

  const animStyle = {
    UpperLeft: {
      bottom: interpolateBottom,
      left: interpolateLeft,
    },
  };

  return <CameraAlbumWrap animStyle={animStyle} />;
};

export default CameraAlbumWrapContainer;
