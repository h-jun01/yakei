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
  cameraOpacity: number;
  albumOpacity: number;
  setCameraOpacity: React.Dispatch<React.SetStateAction<number>>;
  setAlbumOpacity: React.Dispatch<React.SetStateAction<number>>;
  onPressOfCamera: () => void;
  onPressOfAlbum: () => void;
};

const CameraAlbumWrap: FC<Props> = ({ ...props }) => {
  const {
    animStyle,
    cameraOpacity,
    albumOpacity,
    setCameraOpacity,
    setAlbumOpacity,
    onPressOfCamera,
    onPressOfAlbum,
  } = props;
  const wrapBottomRatio = 17 / iPhone11Width;
  const iconAspectRatio = 54 / iPhone11Width;
  const wrapBottom = deviceWidth * wrapBottomRatio;
  const iconAspect = deviceWidth * iconAspectRatio;
  const textColor = baseColor.catskillWhite;
  const backColor = baseColor.darkNavy;

  const bottomStyle =
    Platform.OS === "android" ? { bottom: 54 } : { bottom: wrapBottom };

  const AnimatedView =
    Platform.OS === "android" ? Animated.createAnimatedComponent(View) : View;

  return (
    <View style={[styles.wrap, bottomStyle]}>
      {Platform.OS === "android" ? (
        <>
          <AnimatedView
            style={[
              animStyle.UpperLeft,
              {
                width: iconAspect,
                height: iconAspect,
              },
            ]}
          >
            <TouchableNativeFeedback
              onPressIn={() => setCameraOpacity(0.6)}
              onPressOut={() => setCameraOpacity(1)}
              onPress={onPressOfCamera}
              style={{ opacity: cameraOpacity }}
            >
              <View
                style={{
                  width: iconAspect,
                  aspectRatio: 1,
                }}
              >
                <CameraSvg textColor={textColor} backColor={backColor} />
              </View>
            </TouchableNativeFeedback>
          </AnimatedView>
          <AnimatedView
            style={[
              animStyle.UpperRight,
              {
                width: iconAspect,
                height: iconAspect,
              },
            ]}
          >
            <TouchableNativeFeedback
              onPressIn={() => setAlbumOpacity(0.6)}
              onPressOut={() => setAlbumOpacity(1)}
              style={{ opacity: albumOpacity }}
              onPress={onPressOfAlbum}
            >
              <View>
                <AlbumSvg
                  textColor={textColor}
                  backColor={backColor}
                  style={{ width: iconAspect, aspectRatio: 1 }}
                />
              </View>
            </TouchableNativeFeedback>
          </AnimatedView>
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
