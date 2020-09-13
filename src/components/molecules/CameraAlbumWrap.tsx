import React, { FC } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Animated,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import CameraSvg from "../atoms/svg/CameraSvg";
import AlbumSvg from "../atoms/svg/AlbumSvg";
import { baseColor } from "../../styles/thema/colors";
import { deviceWidth, iPhone11Width } from "../../utilities/dimensions";

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
  const wrapBottomRatio = 17 / iPhone11Width;
  const iconAspectRatio = 54 / iPhone11Width;
  const wrapBottom = deviceWidth * wrapBottomRatio;
  const iconAspect = deviceWidth * iconAspectRatio;
  const textColor = baseColor.catskillWhite;
  const backColor = baseColor.darkNavy;

  const bottomStyle =
    Platform.OS === "android" ? { bottom: 54 } : { bottom: wrapBottom };

  const AnimatedTouchableOpacity =
    Platform.OS === "android"
      ? Animated.createAnimatedComponent(TouchableOpacity)
      : TouchableOpacity;

  return (
    <View style={[styles.wrap, bottomStyle]}>
      {Platform.OS === "android" ? (
        <>
          <AnimatedTouchableOpacity
            style={[
              animStyle.UpperLeft,
              {
                width: iconAspect,
                height: iconAspect,
              },
            ]}
          >
            <TouchableNativeFeedback onPress={onPressOfCamera}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: iconAspect,
                  aspectRatio: 1,
                }}
              >
                <CameraSvg textColor={textColor} backColor={backColor} />
              </TouchableOpacity>
            </TouchableNativeFeedback>
          </AnimatedTouchableOpacity>
          <AnimatedTouchableOpacity
            style={[
              animStyle.UpperRight,
              {
                width: iconAspect,
                height: iconAspect,
              },
            ]}
          >
            <TouchableNativeFeedback onPress={onPressOfAlbum}>
              <TouchableOpacity activeOpacity={0.6}>
                <AlbumSvg
                  textColor={textColor}
                  backColor={backColor}
                  style={{ width: iconAspect, aspectRatio: 1 }}
                />
              </TouchableOpacity>
            </TouchableNativeFeedback>
          </AnimatedTouchableOpacity>
        </>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CameraAlbumWrap;
