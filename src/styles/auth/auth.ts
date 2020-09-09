import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts";
import { deviceWidth } from "../../utilities/dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    height: hp('100%'),
    backgroundColor: baseColor.base,
  },
  authBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  allWrap: {
    width: deviceWidth,
    position: "absolute",
    top: hp('13%'),
  },
  authWrap: {
    width: wp('90%'),
    marginLeft: "auto",
    marginRight: "auto",
    padding: hp('3%'),
    backgroundColor: utilityColor.inputBack,
    borderRadius: 10,
  },

  //input
  authInputItemName: {
    color: baseColor.text,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  authInput: {
    marginBottom: hp('2.3%'),
    padding: wp('1.5%'),
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: utilityColor.border,
    fontSize: Size.Normal,
    color: baseColor.text,
  },
  //authBtn
  buttonBack: {
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: hp('1.5%'),
    marginBottom: hp('.5%'),
  },
  buttonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },

  // 利用規約
  text: {
    marginTop: hp('.5%'),
  },
  textColor: {
    color: baseColor.text,
    fontSize: Size.Small,
    textAlign: "center",
    lineHeight: Size.lineHeight,
  },
  attention: {
    color: baseColor.accent,
    fontWeight: "bold",
    fontSize: Size.NormalS,
  },

  //連携ログイン
  googleBack: {
    backgroundColor: "#DC4E42",
    borderRadius: 5,
    paddingVertical: hp('1.5%'),
    marginBottom: hp('1.5%'),
  },

  authChangeWrap: {
    height: hp('7%'),
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: utilityColor.authNav,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: utilityColor.border,
  },
  authChangeText: {
    color: baseColor.text,
    fontSize: Size.Small,
    padding: wp("3.5%"),
  },
});
