import React, { FC, useState, useRef } from "react";
import { Animated } from "react-native";

import BottomNavItemComponent from "../../components/molecules/BottomNavItem";

type Props = {
  index: number;
  isFocused: boolean;
  label: string;
};

const BottomNavItem: FC<Props> = (props) => {
  const { index, isFocused, label } = props;

  const stateArray = ["0deg", "45deg"];
  const [stateIndex, setStateIndex] = useState(0);
  const plusToCrossAnim = useRef(new Animated.Value(0)).current;

  const resetAnimValue = () => plusToCrossAnim.setValue(0);

  const changeStyle = () => {
    const buttonState = stateArray[stateIndex];
    const newIndex = (stateIndex + 1) % 2;
    if (buttonState == "0deg") {
      // press→active
      Animated.timing(plusToCrossAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else if (buttonState == "45deg") {
      // pressActive→normal
      Animated.timing(plusToCrossAnim, {
        toValue: 2,
        duration: 200,
        useNativeDriver: true,
      }).start(resetAnimValue);
    }
    setStateIndex(newIndex);
  };

  // フレーム値0から1、1から2にかけて0degから45deg、45degから90degに変化
  const interPolateRotate = plusToCrossAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "45deg", "90deg"],
  });

  const animatedRotateStyle = {
    transform: [{ rotate: interPolateRotate }],
  };

  return (
    <BottomNavItemComponent
      index={index}
      isFocused={isFocused}
      label={label}
      style={animatedRotateStyle}
      changeStyle={changeStyle}
    />
  );
};

export default BottomNavItem;
