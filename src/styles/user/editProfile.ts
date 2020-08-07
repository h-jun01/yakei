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
    height: deviceWidth / 4.5,
    backgroundColor: baseColor.base,
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
  margin: {
    margin: 15,
  },
  userButtonWrap: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
