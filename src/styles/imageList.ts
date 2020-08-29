import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../utilities/dimensions";
import { baseColor } from "./thema/colors";
import { Size } from "./thema/fonts";
import NormalMapButtonSvg from "../components/atoms/svg/MapButtonStrokedSvg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
    //フッターの高さ+余剰高さ分あげる
    paddingBottom: 101,
  },
  itemWrap: {
    marginBottom: hp("1.5%"),
  },
  //1層目
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 180,
    marginRight: wp("3%"),
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1.5%"),
    marginBottom: hp("1%"),
    marginLeft: wp("2.5%"),
  },
  userName: {
    color: baseColor.text,
    fontSize: Size.Normal,
    fontWeight: "600",
    marginBottom: hp(".3%"),
  },
  timeStamp: {
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  dotsVertical: {
    color: baseColor.text,
    marginTop: hp(".5%"),
    marginLeft: "auto",
    marginRight: wp("2.5%"),
  },
  //2層目
  imageSize: {
    width: wp("100%"),
    height: hp("25%"),
  },
  //3層目
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp("1%"),
    marginRight: "auto",
  },
  PostIcon: {
    color: baseColor.text,
    fontWeight: "500",
    marginRight: wp(".5%"),
  },
  stateNum: {
    color: baseColor.text,
    fontWeight: "400",
    marginRight: wp("3%"),
  },
});
