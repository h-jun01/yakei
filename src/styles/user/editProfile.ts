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
    backgroundColor: baseColor.base,
  },
  userIconWrap: {
    position: "relative",
    top: -20,
    width: deviceWidth,
    height: "auto",
    backgroundColor: "#1a1a1a",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconImg: {
    position: "relative",
    top: -30,
    zIndex: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  headerImageSize: {
    width: deviceWidth,
    height: 155,
  },
});
