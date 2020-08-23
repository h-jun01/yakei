import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../utilities/dimensions";
import { baseColor, utilityColor } from "./thema/colors";
import { Size } from "./thema/fonts";
import NormalMapButtonSvg from "../components/atoms/svg/MapButtonStrokedSvg";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: deviceWidth,
    //フッターの高さ+余剰高さ分あげる
    paddingBottom: 101,
  },
  itemWrap: {
    marginBottom: 15,
  },
  //1層目
  userIcon: {
    width: 42,
    height: 42,
    borderRadius: 180,
    marginRight: 15,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  userName: {
    color: baseColor.text,
    fontSize: Size.Normal,
    fontWeight: "600",
    marginBottom: 3,
  },
  timeStamp: {
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  dotsVertical: {
    color: baseColor.text,
    marginTop: 5,
    marginLeft: "auto",
    marginRight: 10,
  },
  //2層目
  imageSize: {
    width: deviceWidth,
    height: deviceHeight / 3.5,
  },
  //3層目
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginRight: "auto",
  },
  PostIcon: {
    color: baseColor.text,
    fontWeight: "500",
    marginRight: 5,
  },
  stateNum: {
    color: baseColor.text,
    fontWeight: "400",
    marginRight: 10,
  },
});
