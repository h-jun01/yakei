import React, { FC, useRef } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";
import { setBottomNavHeight } from "../../actions/bottomNav";

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

  const onLayout = (height) => {
    const footerItemBottom = 15;
    const plusBtnBottom = 17; // src/components/molecules/BottomNavTouchableOpacity.tsxのstyleを参照
    const bottomNavHeight = height + footerItemBottom + plusBtnBottom;
    console.log(`height: ${bottomNavHeight}`);
    dispatch(setBottomNavHeight(bottomNavHeight));
  };
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
      onLayout={onLayout}
      onPressOut={onPressOut}
    />
  );
};

export default BottomNavContainer;
