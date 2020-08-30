import React, { FC, useRef } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setCameraAndAlbumStatus } from "../../actions/cameraAndAlbum";

import BottomNav from "../../components/organisms/BottomNav";

const BottomNavContainer: FC<Props> = ({ state, descriptors, navigation }) => {
  const dispatch = useDispatch();
  const whiteWrapAnim = useRef(new Animated.Value(0)).current;

  const isDisplayed = useSelector(
    (state: RootState) => state.bottomNavReducer.isDisplayed
  );
  const isAppearedBtns = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.isAppeared
  );

  if (isAppearedBtns) {
    Animated.timing(whiteWrapAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(whiteWrapAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }
  const opacityInterpolate = whiteWrapAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const opacityAnim = { opacity: opacityInterpolate };

  const onPressOut = () => dispatch(setCameraAndAlbumStatus(false));

  return (
    <BottomNav
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      isDisplayed={isDisplayed}
      isAppearedBtns={isAppearedBtns}
      opacityAnim={opacityAnim}
      onPressOut={onPressOut}
    />
  );
};

export default BottomNavContainer;
