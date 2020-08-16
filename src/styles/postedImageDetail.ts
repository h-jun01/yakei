import { StyleSheet } from "react-native";
import { deviceWidth } from "../utilities/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 180,
  },
  image: {
    width: deviceWidth,
    height: 250,
  },
});
