import { Platform, PlatformIOSStatic, Animated } from "react-native";

export const platformIOS =
  Platform.OS === "ios" ? (Platform as PlatformIOSStatic) : { isPad: false };
