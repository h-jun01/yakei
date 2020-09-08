import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "./thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Size } from "./thema/fonts";
import { Row } from "native-base";

const eiffelSvgViewBoxRatio = 18 / 23;
const mapSvgViewBoxRatio = 22 / 28;
const postBtnViewBoxRatio = 1;

export const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    flexDirection: "column",
    alignItems: "center",
    width: wp("100%"),
  },
  image: {
    marginBottom: wp("1%"),
  },
  rowWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp("1.6%"),
    paddingHorizontal: "5%",
    borderBottomWidth: 0.5,
    borderBottomColor: utilityColor.postInputBorder,
  },
  svgWrap: {
    width: Size.Xxlarge,
    marginRight: wp("5%"),
  },
  eiffelSvgWrap: {
    aspectRatio: eiffelSvgViewBoxRatio,
  },
  mapSvgWrap: {
    aspectRatio: mapSvgViewBoxRatio,
  },
  photgenicSubjectInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: hp("1.25%"),
    paddingHorizontal: wp("2%"),
    fontSize: Size.NormalL,
    color: baseColor.text,
  },
  locationTextWrap: {
    width: "100%",
    marginVertical: hp("1.25%"),
    paddingHorizontal: wp("2%"),
  },
  locationText: {
    width: "90%",
    fontSize: Size.NormalL,
  },
  // 閉じるボタン
  headerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
  },
  // 閉じるボタン内のアイコン
  crossBtnIcon: {
    color: baseColor.text,
    fontSize: wp("5.6%"),
    fontWeight: "bold",
  },
  // 投稿ボタン内のアイコン
  postBtnIcon: {
    width: wp("5.5%"),
    aspectRatio: postBtnViewBoxRatio,
  },
});
