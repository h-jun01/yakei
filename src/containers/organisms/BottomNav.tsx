import React, { FC, useRef, useState } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";
import { setBottomNavHeight } from "../../actions/bottomNav";
import { deviceWidth, iPhone11Width } from "../../utilities/dimensions";
import BottomNav from "../../components/organisms/BottomNav";

const BottomNavContainer: FC<Props> = ({ state, descriptors, navigation }) => {
  const dispatch = useDispatch();
  const whiteWrapAnim = useRef(new Animated.Value(0)).current;
  const [btmNvBgHeight, setBtmNvBgHeight] = useState(0);
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

  // BottomNavの高さを取得
  const getBtmNvHeight = (btmNvBgPlusSafeAreaHeight: number) => {
    const plusBtnBottomRatio = 17 / iPhone11Width;
    const plusBtnBottom = deviceWidth * plusBtnBottomRatio;
    return btmNvBgPlusSafeAreaHeight + plusBtnBottom;
  };
  const onLayoutBtmNvBg = (height: number) => {
    setBtmNvBgHeight(height);
    const btmNvBgPlusSAHeight = height + safeAreaHeihgt;
    const btmNvHeight = getBtmNvHeight(btmNvBgPlusSAHeight);
    dispatch(setBottomNavHeight(btmNvHeight));
  };
  const onLayoutSafeAreaHeight = (height: number) => {
    const heightOnDisplay = height === 0 ? 0 : height - 21;
    setSafeAreaHeihgt(heightOnDisplay);
    const btmNvBgPlusSafeAreaHeight = btmNvBgHeight - heightOnDisplay;
    const bottomNavHeight = getBtmNvHeight(btmNvBgPlusSafeAreaHeight);
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
      onLayoutBtmNvBg={onLayoutBtmNvBg}
      onLayoutSafeAreaHeight={onLayoutSafeAreaHeight}
      onPressOut={onPressOut}
    />
  );
};

export default BottomNavContainer;
