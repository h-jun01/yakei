import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import FooterBackgroundSvg from "../ui/svg/FooterBackgroundSvg";
import PlusButtonSvg from "../ui/svg/PlusButtonSvg";
import MapButtonSvg from "../ui/svg/MapButtonSvg";
import FolderButtonSvg from "../ui/svg/CollectionButtonSvg";
import NotificationButtonSvg from "../ui/svg/NotificationButtonSvg";

const BottomNavComponent: FC = () => {
  return (
    <View style={styles.container}>
      <FooterBackgroundSvg style={styles.fotterItem} />
      <View style={styles.fotterItem}>
        <MapButtonSvg />
        <FolderButtonSvg />
        <PlusButtonSvg />
        <NotificationButtonSvg />
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
    justifyContent: "center",
    bottom: 0,
    width: Dimensions.get("window").width,
  },
});

export default BottomNavComponent;
