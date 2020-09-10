import React, { FC, useRef, useState } from "react";
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
  const [bottomNavBgHeight, setBottomNavBgHeihgt] = useState(0);
  const [safeAreaHeihgt, setSafeAreaHeihgt] = useState(0);

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

  const onLayoutBottomNavBg = (height) => {
    const bottomNavHeight = height - safeAreaHeihgt;
    setBottomNavBgHeihgt(height);
    dispatch(setBottomNavHeight(bottomNavHeight));
  };
  const onLayoutSafeAreaHeight = (height) => {
    const heightOnDisplay = height === 0 ? 0 : height - 21;
    const bottomNavHeight = bottomNavBgHeight - heightOnDisplay;
    setSafeAreaHeihgt(heightOnDisplay);
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
      safeAreaHeihgt={safeAreaHeihgt}
      onLayoutBottomNavBg={onLayoutBottomNavBg}
      onLayoutSafeAreaHeight={onLayoutSafeAreaHeight}
      onPressOut={onPressOut}
    />
  );
};

export default BottomNavContainer;
