import React, { FC } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { baseColor } from "../../styles/thema/colors";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import BottomNavItem from "../../containers/molecules/BottomNavItem";

const BottomNav: FC<Props> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.footerSvgWrap}>
        <FooterBackgroundSvg
          style={styles.footerSvg}
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
    bottom: 17,
    width: Dimensions.get("window").width,
  },
  footerSvgWrap: {
    position: "relative",
    bottom: 75,
    left: -3,
    width: Dimensions.get("window").width + 6,
    // FooterBackgroundSvgのviewbox.width / viewbox.height (379 / 85)
    // これがないと画面サイズぴったりのフッターナビにならない
    aspectRatio: 4.4588,
  },
  footerSvg: {
    position: "absolute",
    bottom: 17,
    shadowColor: "#aaaaaa",
    shadowOffset: {
      width: 0,
      height: -1.5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
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
