import { StyleSheet } from "react-native";
import { deviceWidth } from "../utilities/dimensions";
import { baseColor } from "./thema/colors";
import { Size } from "./thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
    //フッターの高さ+タイトルの高さ分あげる
    paddingBottom: 101,
  },
  //一層目
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 180,
  },
  //2層目
  image: {
    width: wp("100%"),
    height: hp("25%"),
  },
  //3層目
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp("1%"),
    marginRight: "auto",
  },
  favorite: {
    color: baseColor.text,
    fontWeight: "500",
    marginRight: wp(".5%"),
    marginLeft: wp(".5%"),
  },
  favoriteNumber: {
    color: baseColor.text,
    fontWeight: "400",
    marginRight: wp("5%"),
  },
  location: {
    color: baseColor.text,
  },
  //キーボード
  keyboardViewFalse: {
    display: "none",
    flexDirection: "row",
    width: wp("100%"),
    height: "auto",
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: "#fff",
  },
  keyboardViewTrue: {
    flexDirection: "row",
    width: deviceWidth,
    height: "auto",
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: "#fff",
  },
  //コメント
  commentInputField: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
    marginLeft: wp("3%"),
  },
  tapInputField: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("80%"),
    minHeight: 30,
    borderRadius: 15,
    paddingVertical: hp("1.3%"),
    paddingLeft: wp("3%"),
    marginLeft: wp("3%"),
    backgroundColor: "#fff",
  },
  tapInputText: {
    width: wp("100%"),
    color: "#505050",
  },

  input: {
    width: deviceWidth / 1.15,
    minHeight: 30,
    maxHeight: 150,
    height: "auto",
    marginBottom: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 25,
    color: "#505050",
    borderColor: "#f0f0f0",
    backgroundColor: "#f0f0f0",
  },
  sendIcon: {
    marginLeft: "auto",
    paddingRight: 15,
    paddingBottom: 5,
    color: "#606060",
  },

  //コメント覧
  commentBox: {
    flexDirection: "row",
    width: wp("100%"),
    paddingVertical: hp("1.5%"),
    paddingLeft: wp("3%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
  },
  commentData: {
    marginLeft: wp("3%"),
    // marginRight: wp('1%'),
  },
  userName: {
    color: baseColor.text,
    fontWeight: "600",
    marginBottom: hp("1%"),
  },
  message: {
    color: "#e0e0e0",
    marginBottom: hp(".8%"),
    width: wp("80%"),
  },
  time: {
    fontSize: Size.Small,
    color: "#C0C0C0",
  },
  timeStamp: {
    paddingLeft: hp("1.4%"),
    paddingBottom: hp("1.5%"),
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  touchableOpacity: {
    flexDirection: "row",
  },
});
