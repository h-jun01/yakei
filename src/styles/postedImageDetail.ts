import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../utilities/dimensions";
import { baseColor } from "./thema/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: deviceWidth,
    //フッターの高さ+タイトルの高さ分あげる
    paddingBottom: 101,
  },
  userIcon: {
    width: 42,
    height: 42,
    borderRadius: 180,
  },
  image: {
    width: deviceWidth,
    height: deviceHeight / 3,
  },
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  favorite: {
    color: "#fff",
  },
  favoriteNumber: {
    color: "#fff",
    fontSize: 15,
  },
  location: {
    color: "#fff",
    marginLeft: 15,
  },
  keyboardViewFalse: {
    display: "none",
    flexDirection: "row",
    width: deviceWidth,
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
  commentInputField: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
  },
  tapInputField: {
    flexDirection: "row",
    alignItems: "center",
    width: deviceWidth / 1.3,
    minHeight: 30,
    borderRadius: 15,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 10,
    marginLeft: 15,
    backgroundColor: "#fff",
  },
  tapInputText: {
    width: deviceWidth,
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
  commentBox: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    borderColor: "#000",
    width: deviceWidth,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  commentData: {
    marginLeft: 15,
    marginRight: 10,
  },
  userName: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    color: "#e0e0e0",
    marginBottom: 10,
    width: deviceWidth / 1.25,
  },
  time: {
    fontSize: 12,
    color: "#C0C0C0",
  },
});
