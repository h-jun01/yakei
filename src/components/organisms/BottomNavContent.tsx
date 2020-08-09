import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import type { BottomTabBarProps as Props } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import CollectionButtonSvg from "../atoms/svg/CollectionButtonSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";

type SvgProps = {
  index: number;
  isFocused: boolean;
  label: string;
};

const Svg: FC<SvgProps> = (props) => {
  const { index, isFocused, label } = props;
  const color = isFocused ? "#FC2E7E" : "#606578";
  switch (index) {
    case 0:
      return (
        <>
          <MapButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    case 1:
      return (
        <>
          <CollectionButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    case 2:
      return <PlusButtonSvg />;
    case 3:
      return (
        <>
          <NotificationButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    default:
      return (
        <>
          <RoundedUserImage color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
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
              activeOpacity={1}
              style={styles.footerItem}
            >
              <Svg index={index} isFocused={isFocused} label={label} />
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
    bottom: -1,
    width: Dimensions.get("window").width,
  },
  footerItem: {
    width: 0,
    height: 79,
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavContent;
