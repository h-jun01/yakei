import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "./thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Size } from "./thema/fonts";

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
  rowWrap: {
    width: "94%",
    flexDirection: "row",
    alignItems: "center",
  },
  svgWrap: {
    width: Size.Xxlarge,
    marginRight: wp("3%"),
  },
  photgenicSubjectInput: {
    width: "100%",
    marginVertical: hp("1.25%"),
    padding: wp("2%"),
    borderRadius: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: utilityColor.postInputBorder,
    fontSize: Size.Large,
    color: baseColor.text,
  },
  locationTextWrap: {
    width: "100%",
    marginVertical: hp("1.25%"),
    padding: wp("2%"),
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
    color: "#fff",
    fontSize: wp("5.6%"),
    fontWeight: "bold",
    paddingLeft: wp("4%"),
  },
});
