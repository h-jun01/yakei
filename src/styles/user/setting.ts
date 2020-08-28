import { StyleSheet } from "react-native";
import { Size } from '../thema/fonts'
import { baseColor, utilityColor } from '../thema/colors'
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: baseColor.base,
  },
  itemWrap: {
    flexDirection: "column"
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2.8%'),
  },
  leftIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginRight: wp('3%'),
  },
  itemLabel: {
    fontSize: Size.Normal,
    fontWeight: "700",
    color : baseColor.text,
  },
  rightIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginLeft: "auto",
  },
  borderItem: {
    width: wp('100%'),
    height: 1,
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    opacity: 0.5,
  },

  //中身
  //パスワード再設定
  passwdChangeWrap: {
    width: wp('95%'),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp('15%'),
  },
  intro: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "400",
  },
  jiro: {
    marginTop: hp('2%'),
  },
  passwdLabel: {
    color: utilityColor.inputLabel,
    fontSize: Size.Small,
    fontWeight: "600",
  },
  passwdInput: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "600",
  },
  submitButton: {
    width: wp('80%'),
    backgroundColor: baseColor.accent,
    paddingVertical: hp('1.5%'),
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp('25%'),
    borderRadius: 5,
  },
});
