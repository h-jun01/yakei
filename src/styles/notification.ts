import { StyleSheet } from "react-native";
import { deviceWidth } from "../utilities/dimensions";
import { baseColor } from "./thema/colors";
import { Size } from "./thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: baseColor.base,
  },
  wrapper: {
    flexDirection: "row",
    padding: 15,
  },
  userImage: {
    width: 52,
    height: 52,
    borderRadius: 180,
  },
  photoImage: {
    width: 72,
    height: 72,
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
  },
  text: {
    color: "#fff",
    letterSpacing: 0.8,
    lineHeight: 16,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 10,
  },
  timeStamp: {
    paddingLeft: 17,
    paddingRight: 17,
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  nameSize: {
    fontSize: 15,
    fontWeight: "700",
  },
  noNotification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth / 1.3,
    paddingBottom: 30,
  },
  noNotificationText: {
    fontSize: 22,
    color: "#fff",
  },
  supplement: {
    marginTop: 30,
    color: "#ddd",
  },
});
