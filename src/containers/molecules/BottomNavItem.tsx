import React, { FC, useState, useRef } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";
import { RootState } from "../../reducers/index";
import {
  deviceWidth,
  iPhone11Width,
  iPadPro11Width,
} from "../../utilities/dimensions";
import { platformIOS } from "../../utilities/judgeIPad";
import BottomNavItem from "../../components/molecules/BottomNavItem";

const generateAnimatedStyle = (anim) => {
  const standardWidth = platformIOS.isPad ? iPadPro11Width : iPhone11Width;
  const bottomMoveRatio = 1 / standardWidth;
  const bottomOutputRange = deviceWidth * bottomMoveRatio;
  const leftMoveRatio = 0.15 / standardWidth;
  const leftOutputRange = deviceWidth * leftMoveRatio;

  // フレーム値0から1、1から2にかけて0degから45deg、45degから90degに変化
  const interpolateRotate = anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "45deg", "90deg"],
  });
  const bottomInterpolate = anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, bottomOutputRange, bottomOutputRange * 2],
  });
  const leftInterpolate = anim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, leftOutputRange, leftOutputRange * 2],
  });

  return {
    transform: [{ rotate: interpolateRotate }],
    bottom: bottomInterpolate,
    left: leftInterpolate,
  };
};

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

  const animateStart = (anim, buttonState) => {
    const { toValue, shouldAppearBtns, asyncFunc } = (() => {
      if (buttonState === "0deg") {
        return {
          toValue: 1,
          shouldAppearBtns: true,
          asyncFunc: () => {},
        };
      } else {
        // buttonState ==="45deg"
        const resetAnimValue = () => plusToCrossAnim.setValue(0);
        return {
          toValue: 2,
          shouldAppearBtns: false,
          asyncFunc: resetAnimValue,
        };
      }
    })();
    Animated.timing(anim, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start(asyncFunc);

    dispatch(setShouldAppearPostBtns(shouldAppearBtns));
    const newIndex = (stateIndex + 1) % 2;
    setStateIndex(newIndex);
  };

  const shouldAppearBtns = useSelector(
    (state: RootState) => state.postBtnsReducer.shouldAppear
  );
  const isPushedOuterBtns =
    !shouldAppearBtns && stateArray[stateIndex] == "45deg";
  if (isPushedOuterBtns) animateStart(plusToCrossAnim, "45deg");

  const changeStyle = () => {
    const buttonState = stateArray[stateIndex];
    animateStart(plusToCrossAnim, buttonState);
  };

  const animatedRotateStyle = generateAnimatedStyle(plusToCrossAnim);

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
