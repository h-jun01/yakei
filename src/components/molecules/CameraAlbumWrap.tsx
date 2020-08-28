import React, { FC, MutableRefObject } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import CameraSvg from "../atoms/svg/CameraSvg";
import AlbumSvg from "../atoms/svg/AlbumSvg";
import { baseColor } from "../../styles/thema/colors";

type Props = {
  animStyle: {
    UpperLeft: Object;
    UpperRight: Object;
  };
  viewRef: MutableRefObject<View | null>;
};

const CameraAlbumWrap: FC<Props> = ({ ...props }) => {
  const { animStyle, viewRef } = props;
  const displayWidth = Dimensions.get("window").width;
  const iPhone11width = 414;
  const wrapHeightRatio = 72 / iPhone11width;
  const iconAspectRatio = 54 / iPhone11width;
  const wrapHeight = displayWidth * wrapHeightRatio;
  const iconAspect = displayWidth * iconAspectRatio;
  const paddingToCenter = (wrapHeight - iconAspect) / 2;
  const textColor = baseColor.catskillWhite;
  const backColor = baseColor.darkNavy;

  const styles = StyleSheet.create({
    wrap: {
      bottom: 17,
      height: wrapHeight,
      paddingTop: paddingToCenter,
      flexDirection: "row",
    },
  });
  return (
    <View style={styles.wrap} ref={viewRef}>
      <View style={{ width: iconAspect, aspectRatio: 1 }}>
        <CameraSvg
          textColor={textColor}
          backColor={backColor}
          style={animStyle.UpperLeft}
        />
      </View>
      <View style={{ width: iconAspect, aspectRatio: 1 }}>
        <AlbumSvg
          textColor={textColor}
          backColor={backColor}
          style={animStyle.UpperRight}
        />
      </View>
    </View>
  );
};

export default CameraAlbumWrap;
