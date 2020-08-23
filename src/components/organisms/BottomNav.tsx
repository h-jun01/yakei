import React, { FC, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { baseColor } from "../../styles/thema/colors";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import BottomNavItem from "../../containers/molecules/BottomNavItem";

const BottomNav: FC<Props> = ({ state, descriptors, navigation }) => {
  const [safeAreaInsetHeighet, setSafeAreaInsetHeihgt] = useState(0);
  const onLayout = (e) => {
    setSafeAreaInsetHeihgt(e.nativeEvent.layout.height);
  };

  const footerSvgStyle = StyleSheet.create({
    style: {
      position: "absolute",
      bottom: -safeAreaInsetHeighet,
      shadowColor: "#aaaaaa",
      shadowOffset: {
        width: 0,
        height: -1.5,
      },
      shadowOpacity: 0.8,
      shadowRadius: 1.5,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.footerSvgWrap}>
          <FooterBackgroundSvg
            style={footerSvgStyle.style}
            backColor={baseColor.darkNavy}
          />
        </View>
        <View style={styles.footerWrap}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = route.name;
            const isFocused = state.index === index;

            const onPress = () => {
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
                style={[
                  styles.footerItem,
                  index === 2 ? styles.plusButton : {},
                ]}
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
      <SafeAreaView style={{ display: "none" }} onLayout={onLayout} />
    </>
  );
};

const displayWidth = Dimensions.get("window").width;
const itemsFloatingRatio = 0.03623;
const viewboxRatio = 4.4588; // FooterBackgroundSvgのviewbox.width / viewbox.height

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0,
  },
  footerWrap: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: displayWidth * itemsFloatingRatio,
    width: displayWidth,
  },
  footerSvgWrap: {
    position: "absolute",
    bottom: -1.3,
    left: -1.8,
    width: displayWidth + 6,
    aspectRatio: viewboxRatio, // これがないと画面サイズぴったりのボトムナビにならない
  },
  footerItem: {
    bottom: 15,
    width: 0,
    height: 79,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  plusButton: {
    bottom: 0,
    paddingHorizontal: 10,
  },
});

export default BottomNav;
