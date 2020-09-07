import React, { FC } from "react";
import { TouchableOpacity, View, Dimensions, StyleSheet } from "react-native";
import CameraSvg from "../atoms/svg/CameraSvg";
import AlbumSvg from "../atoms/svg/AlbumSvg";
import { baseColor } from "../../styles/thema/colors";

type Props = {
  animStyle: {
    UpperLeft: Object;
    UpperRight: Object;
  };
  onPressOfCamera: () => void;
  onPressOfAlbum: () => void;
};

const CameraAlbumWrap: FC<Props> = ({ ...props }) => {
  const { animStyle, onPressOfCamera, onPressOfAlbum } = props;
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
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={onPressOfCamera}
        style={{ width: iconAspect, aspectRatio: 1 }}
      >
        <CameraSvg
          textColor={textColor}
          backColor={backColor}
          style={animStyle.UpperLeft}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressOfAlbum}
        style={{ width: iconAspect, aspectRatio: 1 }}
      >
        <AlbumSvg
          textColor={textColor}
          backColor={backColor}
          style={animStyle.UpperRight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CameraAlbumWrap;
