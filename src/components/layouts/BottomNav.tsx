import React, { FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import PlusButtonSvg from "../ui/svg/PlusButtonSvg";
import MapButtonSvg from "../ui/svg/MapButtonSvg";
import FolderButtonSvg from "../ui/svg/FolderButtonSvg";
import NotificationButtonSvg from "../ui/svg/NotificationButtonSvg";

const BottomNavComponent: FC = () => {
  return (
    <View style={styles.container}>
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
    // flexDirection: "column",
    zIndex: 0,
    width: Dimensions.get("window").width,
    marginBottom: "4%",
    position: "absolute",
    bottom: "1%",
  },
});

export default BottomNavComponent;
