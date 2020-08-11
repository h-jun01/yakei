import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from '../thema/colors'

export const styles = StyleSheet.create({
  editProWrap: {
    width: deviceWidth,
    height: "auto",
    backgroundColor: baseColor.base,
    justifyContent: "space-between",
  },
  userInfoWrap: {
    position: "relative",
    top: "-5%",
    width: deviceWidth,
    height: deviceWidth * 2,
    backgroundColor: baseColor.base,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconImg: {
    position: "relative",
    top: "-3%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputWrap: {
    position: "relative",
    // top: "-15%",
  },
  margin: {
    margin: 15,
  },
  userButtonWrap: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
