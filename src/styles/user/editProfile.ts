import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import {baseColor} from '../thema/colors'

export const styles = StyleSheet.create({
  editProWrap: {
    width: deviceWidth,
    height: deviceHeight,
    color: baseColor.text,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    backgroundColor: baseColor.base,
  },
  userIconWrap: {
    width: deviceWidth,
    height: 70,
    backgroundColor: "#f00",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconImg: {
    zIndex: 10,
    borderColor: "#00f",
  },
  headerImageSize: {
    width: deviceWidth,
    height: 155,
  },
});
