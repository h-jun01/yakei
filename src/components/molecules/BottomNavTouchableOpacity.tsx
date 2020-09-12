import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import BottomNavItem from "../../containers/molecules/BottomNavItem";
import { deviceWidth, iPhone11Width } from "../../utilities/dimensions";

type Props = {
  index: number;
  isFocused: boolean;
  options: BottomTabNavigationOptions;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
};

const BottomNavTouchableOpacity: FC<Props> = ({ ...props }) => {
  const { index, isFocused, options, onPress, onLongPress, label } = props;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      onPress={index !== 2 ? onPress : () => {}}
      onLongPress={onLongPress}
      activeOpacity={1}
      style={[styles.footerItem, index === 2 ? styles.plusButton : {}]}
    >
      <BottomNavItem index={index} isFocused={isFocused} label={label} />
    </TouchableOpacity>
  );
};

const itemsFloatingRatio = 15 / iPhone11Width;
const plusBtnBttomRatio = 17 / iPhone11Width;
const viewboxRatio = 4.4588; // viewbox.width / viewbox.height

const styles = StyleSheet.create({
  footerItem: {
    bottom: deviceWidth * itemsFloatingRatio,
    width: 0,
    height: deviceWidth / viewboxRatio - deviceWidth * itemsFloatingRatio * 2,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  plusButton: {
    bottom: deviceWidth * plusBtnBttomRatio,
    paddingHorizontal: 10,
  },
});

export default BottomNavTouchableOpacity;
