import React, { FC } from "react";
import { SafeAreaView, View, StyleSheet, Animated, Image } from "react-native";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { baseColor } from "../../styles/thema/colors";
import {
  deviceWidth,
  deviceHeight,
  iPadPro11Width,
} from "../../utilities/dimensions";
import CameraAlbumWrap from "../../containers/molecules/CameraAlbumWrap";
import BottomNavTouchableOpacity from "../../containers/molecules/BottomNavTouchableOpacity";
import WhiteWrap from "../../containers/atoms/WhiteWrap";

type Props = {
  state: BottomTabBarProps["state"];
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
  shouldDisplay: boolean;
  shouldAppearBtns: boolean;
  opacityAnim: Object;
  whiteWrapAnim: Animated.Value;
  safeAreaHeihgt: number;
  onLayoutBtmNvBg: (height: number) => void;
  onLayoutSafeAreaHeight: (height: number) => void;
  onPressOut: () => void;
};

const BottomNav: FC<Props> = ({ ...props }) => {
  const {
    state,
    descriptors,
    navigation,
    shouldDisplay,
    shouldAppearBtns,
    opacityAnim,
    whiteWrapAnim,
    safeAreaHeihgt,
    onLayoutBtmNvBg,
    onLayoutSafeAreaHeight,
    onPressOut,
  } = props;
  const postScreenIndex = 4;

  return (
    <>
      <View
        style={[styles.container, shouldDisplay ? {} : { display: "none" }]}
      >
        {shouldAppearBtns ? (
          <WhiteWrap
            onPressOut={onPressOut}
            whiteWrapAnim={whiteWrapAnim}
            styles={[styles.whiteWrap, opacityAnim]}
          />
        ) : (
          <></>
        )}
        <View
          style={styles.footerBackgroundWrap}
          onLayout={(e) => onLayoutBtmNvBg(e.nativeEvent.layout.height)}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../../assets/tabletBottomNavBackground.png")}
          />
        </View>
        <View style={styles.cameraAndAlbumWrap}>
          <CameraAlbumWrap
            state={state}
            routes={state.routes}
            navigation={navigation}
          />
        </View>
        <View style={styles.footerItemsWrap}>
          {state.routes.map((route, index) => {
            if (index > postScreenIndex) return;
            return (
              <BottomNavTouchableOpacity
                key={index}
                state={state}
                route={route}
                descriptors={descriptors}
                navigation={navigation}
                index={index}
              />
            );
          })}
        </View>
      </View>
      <SafeAreaView
        style={[
          { backgroundColor: baseColor.darkNavy },
          shouldDisplay ? {} : { display: "none" },
          safeAreaHeihgt === 0 ? {} : { marginBottom: -21 },
        ]}
        onLayout={(e) => onLayoutSafeAreaHeight(e.nativeEvent.layout.height)}
      />
    </>
  );
};

const itemsFloatingRatio = 4 / iPadPro11Width;
const viewboxRatio = 10.2966; // width / height
const footerBgBtmRatio = -14 / iPadPro11Width;
const footerBgBtm = deviceWidth * footerBgBtmRatio;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 0,
  },
  whiteWrap: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: deviceHeight,
  },
  footerBackgroundWrap: {
    position: "absolute",
    bottom: footerBgBtm,
    width: deviceWidth,
    aspectRatio: viewboxRatio, // これがないと画面サイズぴったりのボトムナビにならない
  },
  cameraAndAlbumWrap: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    bottom: deviceWidth * itemsFloatingRatio,
    width: deviceWidth,
  },
  footerItemsWrap: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: deviceWidth * itemsFloatingRatio,
    width: deviceWidth,
  },
});

export default BottomNav;
