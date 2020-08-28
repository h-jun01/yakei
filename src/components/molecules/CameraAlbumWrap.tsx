import React, { FC } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import CameraSvg from "../atoms/svg/CameraSvg";
import AlbumSvg from "../atoms/svg/AlbumSvg";

const CameraAlbumWrap: FC = () => {
  const displayWidth = Dimensions.get("window").width;
  const iPhone11width = 414;
  const wrapHeightRatio = 72 / iPhone11width;
  const iconAspectRatio = 54 / iPhone11width;
  const wrapHeight = displayWidth * wrapHeightRatio;
  const iconAspect = displayWidth * iconAspectRatio;
  const paddingToCenter = (wrapHeight - iconAspect) / 2;

  const styles = StyleSheet.create({
    wrap: {
      bottom: 17,
      height: wrapHeight,
      paddingTop: paddingToCenter,
      flexDirection: "row",
    },
    camera: {
      position: "relative",
      left: "50%",
    },
    album: {
      position: "relative",
      right: "50%",
    },
  });
  return (
    <View style={styles.wrap}>
      <View style={{ width: iconAspect, aspectRatio: 1 }}>
        <CameraSvg style={styles.camera} />
      </View>
      <View style={{ width: iconAspect, aspectRatio: 1 }}>
        <AlbumSvg style={styles.album} />
      </View>
    </View>
  );
};

export default CameraAlbumWrap;
