import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "./thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    flex: 1,
    width: wp("100%"),
    height: hp("100%"),
  },
  userImgWrap: {
    position: "relative",
  },
  iconImg: {
    position: "absolute",
    alignSelf: "center",
    bottom: hp("8%"),
    zIndex: 1,
  },
  overlay: {
    width: wp("20.3%"),
    height: wp("20.3%"),
    position: "absolute",
    bottom: hp("8.2%"),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 180,
    backgroundColor: utilityColor.strongOverlay,
    zIndex: 2,
  },

  //インプットエリア
  inputWrap: {
    width: wp("95%"),
    alignSelf: "center",
    paddingTop: 10,
  },
  margin: {
    marginVertical: hp("1.5%"),
  },
  userButton: {
    width: wp("85%"),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp("15%"),
    paddingVertical: hp("1.5%"),
    backgroundColor: baseColor.accent,
    borderRadius: 5,
  },
  headerIcon: {
    position: "absolute",
    bottom: hp("2%"),
    right: wp("2%"),
  },

  //保存ボタン
  crossButton: {
    color: "#fff",
    fontSize: wp("5.6%"),
    fontWeight: "bold",
    paddingLeft: wp("4%"),
  },
});
