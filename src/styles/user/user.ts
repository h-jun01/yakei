import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import { baseColor,utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts"


export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: deviceWidth,
    marginLeft: "auto",
    marginRight: "auto",
    //フッターの高さ分あげる
    paddingBottom: 101,
  },

  overlay: {
    width: deviceWidth,
    height: deviceHeight / 3,
    backgroundColor: utilityColor.overlay,
  },

  //ユーザー情報
  userInfoWrap: {
    flex: 1,
  },
  infoWrap: {
    width: deviceWidth,
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
    zIndex: 1,
  },
  iconBox: {
    alignSelf: 'center',
    marginBottom: "2%"
  },
  userName: {
    alignSelf: 'center',
    color: baseColor.text,
    fontSize: 24,
    fontWeight: "600",
    marginBottom: "2%"
  },
  userIntro: {
    width: deviceWidth / 1.5,
    alignSelf: 'center',
    color: baseColor.text,
    fontSize: Size.NormalS,
    fontWeight: "500",
    lineHeight: Size.lineHeight,
    marginBottom: "5%"
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
    top: "0%",
    right: "5%"
  },

  //画像等
  imgItemWrap: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: "wrap",
    backgroundColor: baseColor.base,
  },
  imgItem: {
    width: deviceWidth / 3.1,
    height: deviceWidth / 3.1,
    margin: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
