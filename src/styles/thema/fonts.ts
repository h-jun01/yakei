import { Platform, PixelRatio, PlatformIOSStatic } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";

// based on iphone 11 pro/ MAX scale
const scale = deviceWidth / 414;

//fontSizeを可変
const normalize = (size: number): number => {
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const Size = {
  Xxsmall: normalize(8),
  Xsmall: normalize(10),
  Small: normalize(12),
  NormalS: normalize(13),
  Normal: normalize(14),
  NormalL: normalize(15),
  Large: normalize(16),
  Xlarge: normalize(18),
  Xxlarge: normalize(20),
  noNotificationSize: normalize(22),
  userNameSize: normalize(24),
  titleSize: normalize(43),
  iPadTitleSize: normalize(31),
  lineHeight: normalize(16),
};
export const iconSize = {
  Small: normalize(16),
  NormalS: normalize(21),
  Normal: normalize(24),
  Large: normalize(32),
};

// export const Weights = {
//   Thin: "100",
//   Light: "300",
//   Regular: "400",
//   Medium: "500",
//   Bold: "600",
//   Heavy: "800",
//   Black: "900"
// };

export const fontFamily = {
  gothic: "YuGothic",
  roboto:
    'Roboto, Helvetica, Arial, "Hiragino Sans", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, sans-serif',
};
