import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
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

  //アプリ名
  titleWrap: {
    alignItems: "center",
    marginBottom: hp('4%'),
    marginLeft: "auto",
    marginRight: "auto",
  },
  yakeiLogo: {
    color: "#fff",
    width: wp('57%'),
    height: hp('8%'),
    zIndex: 1,
  },

  //input
  authInputItemName: {
    color: baseColor.text,
    fontSize: Size.Small,
    fontWeight: "600",
  },
  authInput: {
    marginBottom: hp('2.5%'),
    padding: wp('2%'),
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: utilityColor.border,
    fontSize: Size.Large,
    color: baseColor.text,
  },
  //authBtn
  buttonBack: {
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: hp('1.5%'),
    marginBottom: hp('1%'),
  },
  buttonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },

  // 利用規約
  text: {
    marginTop: hp('1%'),
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

  //または
  borderBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: hp('1.6%'),
  },
  orText: {
    color: baseColor.text,
    paddingHorizontal: wp('8%'),
    fontSize: Size.Small,
  },
  borderItem: {
    width: wp('25%'),
    height: 1,
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    opacity: 0.5,
  },

  //連携ログイン
  twitterBack: {
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
    padding: 20,
  },
});
