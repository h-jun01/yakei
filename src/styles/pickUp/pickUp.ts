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
    height: hp("32%"),
  },
  itemInfoWrap: {
    height: hp("7%"),
    width: hp("100%"),
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    backgroundColor: utilityColor.itemFilter,
    padding: hp("1.5%"),
  },
  itemTitle: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "500",
    paddingBottom: hp("1.3%"),
  },
  itemTime: {
    fontSize: Size.Normal,
    fontWeight: "400",
    color: baseColor.text,
  },
});
