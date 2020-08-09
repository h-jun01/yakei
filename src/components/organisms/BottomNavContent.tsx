import React, { FC } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import CollectionButtonSvg from "../atoms/svg/CollectionButtonSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";

const Svg: FC<{ index: number }> = (props) => {
  const { index } = props;
  switch (index) {
    case 0:
      return <MapButtonSvg />;
    case 1:
      return <CollectionButtonSvg />;
    case 2:
      return <PlusButtonSvg />;
    case 3:
      return <NotificationButtonSvg />;
    default:
      return <RoundedUserImage />;
  }
};

const BottomNavContent: FC<Props> = ({ state, descriptors, navigation }) => {
  // console.log(state);
  // console.log(descriptors);
  // console.log(navigation);

  return (
    <View style={styles.container}>
      <FooterBackgroundSvg style={styles.fotterWrap} />
      <View style={styles.fotterWrap}>
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
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.footerItem}
            >
              <Svg index={index} />
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
  },
  fotterWrap: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: 0,
    width: Dimensions.get("window").width,
  },
  footerItem: {
    width: 0,
    height: 79,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavContent;
