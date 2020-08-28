import React, { FC, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { baseColor } from "../../styles/thema/colors";
import CameraAlbumWrap from "../../containers/molecules/CameraAlbumWrap";
import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import BottomNavItem from "../../containers/molecules/BottomNavItem";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";

const BottomNav: FC<Props> = ({ state, descriptors, navigation }) => {
  const shouldDisplay = useSelector(
    (state: RootState) => state.bottomNavReducer.shouldDisplay
  );
  const shouldAppearBtns = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.shouldAppear
  );
  const whiteWrapAnim = useRef(new Animated.Value(0)).current;
  if (shouldAppearBtns) {
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

  return (
    <View style={[styles.container, shouldDisplay ? {} : { display: "none" }]}>
      <Animated.View
        style={[
          styles.whiteWrap,
          shouldAppearBtns ? {} : { display: "none" },
          { opacity: opacityInterpolate },
        ]}
      />
      <View style={styles.footerBackgroundWrap}>
        <FooterBackgroundSvg
          style={styles.footerBackground}
          backColor={baseColor.darkNavy}
        />
      </View>
      <View style={styles.cameraAndAlbumWrap}>
        <CameraAlbumWrap />
      </View>
      <View style={styles.footerItemsWrap}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            if (shouldAppearBtns) return;
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={index !== 2 ? onPress : () => {}}
              onLongPress={onLongPress}
              activeOpacity={1}
              style={[styles.footerItem, index === 2 ? styles.plusButton : {}]}
            >
              <BottomNavItem
                index={index}
                isFocused={isFocused}
                label={label}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const displayWidth = Dimensions.get("window").width;
const displayHeight = Dimensions.get("window").height;
const itemsFloatingRatio = 0.03623;
const viewboxRatio = 4.4588; // viewbox.width / viewbox.height

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0,
  },
  whiteWrap: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "100%",
    height: displayHeight,
  },
  footerBackgroundWrap: {
    position: "absolute",
    bottom: -2.25,
    left: -2.75,
    width: displayWidth + 10,
    aspectRatio: viewboxRatio, // これがないと画面サイズぴったりのボトムナビにならない
  },
  footerBackground: {
    position: "absolute",
    shadowColor: "#aaaaaa",
    shadowOffset: {
      width: 0,
      height: -0.5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
  },
  cameraAndAlbumWrap: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    bottom: displayWidth * itemsFloatingRatio,
    left: -2.75,
    width: displayWidth + 10,
  },
  footerItemsWrap: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: displayWidth * itemsFloatingRatio,
    width: displayWidth,
  },
  footerItem: {
    bottom: 15,
    width: 0,
    height:
      displayWidth / viewboxRatio - displayWidth * itemsFloatingRatio - 15,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  plusButton: {
    bottom: 17,
    paddingHorizontal: 10,
  },
});

export default BottomNav;
