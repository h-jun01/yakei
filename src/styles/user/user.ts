import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import { baseColor,utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



export const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp('100%'),
    marginLeft: "auto",
    marginRight: "auto",
    //フッターの高さ分あげる
    paddingBottom: 101,
  },

  overlay: {
    width: wp('100%'),
    height: hp('35%'),
    backgroundColor: utilityColor.overlay,
  },

  //ユーザー情報
  userInfoWrap: {
    flex: 1,
  },
  infoWrap: {
    width: wp('100%'),
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp('2.5%'),
    zIndex: 1,
  },
  iconBox: {
    alignSelf: 'center',
    marginBottom: hp('1%'),
  },
  userName: {
    alignSelf: 'center',
    color: baseColor.text,
    fontSize: Size.userNameSize,
    fontWeight: "600",
    marginBottom: hp('1%')
  },
  userIntro: {
    width: wp('65%'),
    alignSelf: 'center',
    color: baseColor.text,
    fontSize: Size.NormalS,
    fontWeight: "500",
    lineHeight: Size.lineHeight,
    marginBottom: hp('2.5'),
  },
  userState: {
    flexDirection: "row",
  },
  stateText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: baseColor.text,
    fontSize: Size.NormalS,
    fontWeight: "600",
    borderColor: "#fff",
  },

  //設定への遷移
  buttonItem: {
    position: "absolute",
    top: hp('0%'),
    right: wp('5%'),
  },

  //画像等
  imgItemWrap: {
    flex: 3,
    width: wp('100%'),
    flexDirection: 'row',
    flexWrap: "wrap",
    backgroundColor: baseColor.base,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgItem: {
    width: wp('32%'),
    height: wp('32%'),
    margin: wp('0.5%'),
  }
});
