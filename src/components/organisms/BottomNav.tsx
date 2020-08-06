import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import FolderButtonSvg from "../atoms/svg/CollectionButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";

const BottomNavComponent: FC = () => {
  return (
    <View style={styles.container}>
      <FooterBackgroundSvg style={styles.fotterItem} />
      <View style={styles.fotterItem}>
        <MapButtonSvg />
        <FolderButtonSvg />
        <PlusButtonSvg />
        <NotificationButtonSvg />
        <RoundedUserImage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
  fotterItem: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: 0,
    width: Dimensions.get("window").width,
  },
});

export default BottomNavComponent;
