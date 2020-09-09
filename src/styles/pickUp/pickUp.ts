import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts";
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
    //フッターの高さ+タイトルの高さ分あげる
    paddingBottom: 101,
  },
  image: {
    width: wp("100%"),
    height: wp("70%"),
  },
  itemInfoWrap: {
    height: wp("20%"),
    width: wp("100%"),
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    backgroundColor: utilityColor.itemFilter,
    padding: wp("4%"),
  },
  itemTitle: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "500",
    paddingBottom: wp("2%"),
  },
  itemTime: {
    color: baseColor.text,
    fontSize: Size.Normal,
    fontWeight: "400",
  },
});
