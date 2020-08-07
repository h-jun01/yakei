import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import {baseColor} from '../thema/colors'

export const styles = StyleSheet.create({
  editProWrap: {
    width: deviceWidth,
    height: "auto",
    backgroundColor: baseColor.base,
    flex: 1,
    justifyContent: "space-between",
  },
  userIconWrap: {
    position: "relative",
    top: "-8%",
    width: deviceWidth,
    height: deviceWidth / 4.5,
    backgroundColor: baseColor.base,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconImg: {
    position: "relative",
    top: -30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputWrap: {
    position: "relative",
    top: -40,
  },
  margin: {
    margin: 15,
  },
  userButtonWrap: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
