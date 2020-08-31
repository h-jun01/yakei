import React, { FC } from "react";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import BottomNavItem from "../../containers/molecules/BottomNavItem";

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
      key={index}
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

const displayWidth = Dimensions.get("window").width;
const itemsFloatingRatio = 0.03623;
const viewboxRatio = 4.4588; // viewbox.width / viewbox.height

const styles = StyleSheet.create({
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

export default BottomNavTouchableOpacity;
