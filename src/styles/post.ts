import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "./thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Size } from "./thema/fonts";

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
    marginBottom: wp("4%"),
  },
  rowWrap: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  svgWrap: {
    width: Size.Xxlarge,
    marginRight: wp("5%"),
  },
  photgenicSubjectInput: {
    width: "100%",
    marginVertical: hp("1.25%"),
    paddingHorizontal: wp("2%"),
    paddingTop: wp("2%"),
    paddingBottom: wp("5%"),
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: utilityColor.postInputBorder,
    fontSize: Size.Large,
    color: baseColor.text,
  },
  locationTextWrap: {
    width: "100%",
    marginVertical: hp("1.25%"),
    paddingHorizontal: wp("2%"),
    paddingTop: wp("2%"),
    paddingBottom: wp("5.5%"),
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: utilityColor.postInputBorder,
  },
  locationText: {
    width: "100%",
    fontSize: Size.Large,
    color: baseColor.text,
  },
  // 閉じるボタン
  crossButton: {
    color: baseColor.text,
    fontSize: wp("5.6%"),
    fontWeight: "bold",
    paddingLeft: wp("4%"),
  },
  // 投稿ボタン
  postBtn: {
    width: wp("9%"),
    paddingRight: wp("4%"),
    aspectRatio: postBtnViewBoxRatio,
  },
});
