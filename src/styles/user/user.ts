import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import { baseColor } from "../thema/colors";
import { Size } from "../thema/fonts"


export const styles = StyleSheet.create({
  allWrap: {
    width: deviceWidth,
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: baseColor.base,
  },
  userInfoWrap: {
    position: "relative",
    top: "-5%",
    width: deviceWidth,
    backgroundColor: baseColor.base,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  iconBox: {
    position: "relative",
    top: "-5%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconImg: {
    borderWidth: 9,
    borderColor: baseColor.base,
  },
  userInfo: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    top: "-3%",
  },
  userName: {
    color: baseColor.text,
    fontSize: Size.Xlarge,
    fontWeight: "600",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
  },
  userIntro: {
    width: deviceWidth / 1.5,
    color: baseColor.text,
    fontSize: Size.Normal,
    lineHeight: Size.lineHeight,
  },
  photoText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: baseColor.text,
    fontSize: Size.Normal,
    padding: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  imgItemWrap: {
    flex: 3,
    flexDirection: 'row',
    flexWrap:　"wrap",
    justifyContent: 'center',
  },
  imgItem: {
    width: deviceWidth / 3.1,
    height: deviceWidth / 3.1,
    margin: 1.5,
    borderRadius: 5,
  }
});
