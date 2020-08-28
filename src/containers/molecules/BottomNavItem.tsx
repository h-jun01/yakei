import React, { FC, useState, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { setCameraAndAlbumStatus } from "../../actions/cameraAndAlbum";
import BottomNavItem from "../../components/molecules/BottomNavItem";

type Props = {
  index: number;
  isFocused: boolean;
  label: string;
};

const BottomNavItemContainer: FC<Props> = (props) => {
  const { index, isFocused, label } = props;
  const dispatch = useDispatch();

  const stateArray = ["0deg", "45deg"];
  const [stateIndex, setStateIndex] = useState(0);
  const plusToCrossAnim = useRef(new Animated.Value(0)).current;
  const resetAnimValue = () => plusToCrossAnim.setValue(0);

  const changeStyle = () => {
    const buttonState = stateArray[stateIndex];
    const newIndex = (stateIndex + 1) % 2;
    if (buttonState == "0deg") {
      Animated.timing(plusToCrossAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false, // trueにするとbottomのアニメーションが効かなくなる
      }).start();
      dispatch(setCameraAndAlbumStatus(true));
    } else if (buttonState == "45deg") {
      Animated.timing(plusToCrossAnim, {
        toValue: 2,
        duration: 200,
        useNativeDriver: false,
      }).start(resetAnimValue);
      dispatch(setCameraAndAlbumStatus(false));
    }
    setStateIndex(newIndex);
  };

  // フレーム値0から1、1から2にかけて0degから45deg、45degから90degに変化
  const interpolateRotate = plusToCrossAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "45deg", "90deg"],
  });

  const displayWidth = Dimensions.get("window").width;
  const iPhone11width = 414;
  const bottomMoveRatio = 1 / iPhone11width;
  const bottomOutputRange = displayWidth * bottomMoveRatio;
  const leftMoveRatio = 0.15 / iPhone11width;
  const leftOutputRange = displayWidth * leftMoveRatio;

  const interpolateBottom = plusToCrossAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, bottomOutputRange, bottomOutputRange * 2],
  });

  const interpolateLeft = plusToCrossAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, leftOutputRange, leftOutputRange * 2],
  });

  const animatedRotateStyle = {
    transform: [{ rotate: interpolateRotate }],
    bottom: interpolateBottom,
    left: interpolateLeft,
  };

  return (
    <BottomNavItem
      index={index}
      isFocused={isFocused}
      label={label}
      style={animatedRotateStyle}
      changeStyle={changeStyle}
    />
  );
};

export default BottomNavItemContainer;
