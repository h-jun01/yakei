import React, { FC, useRef } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";

import BottomNav from "../../components/organisms/BottomNav";

const BottomNavContainer: FC<Props> = ({ state, descriptors, navigation }) => {
  const dispatch = useDispatch();
  const whiteWrapAnim = useRef(new Animated.Value(0)).current;

  const shouldDisplay = useSelector(
    (state: RootState) => state.bottomNavReducer.shouldDisplay
  );
  const shouldAppearBtns = useSelector(
    (state: RootState) => state.postBtnsReducer.shouldAppear
  );

  const opacityInterpolate = whiteWrapAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const opacityAnim = { opacity: opacityInterpolate };

  const onPressOut = () => dispatch(setShouldAppearPostBtns(false));

  return (
    <BottomNav
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      shouldDisplay={shouldDisplay}
      shouldAppearBtns={shouldAppearBtns}
      whiteWrapAnim={whiteWrapAnim}
      opacityAnim={opacityAnim}
      onPressOut={onPressOut}
    />
  );
};

export default BottomNavContainer;
