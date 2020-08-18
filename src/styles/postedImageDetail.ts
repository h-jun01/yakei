import { StyleSheet } from "react-native";
import { deviceWidth } from "../utilities/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 180,
  },
  image: {
    width: deviceWidth,
    height: 250,
  },
  postItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  keyboardView: {
    display: "none",
    flexDirection: "row",
    width: deviceWidth,
    height: "auto",
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: "#fff",
  },
  keyboardView2: {
    marginBottom: 80,
    flexDirection: "row",
    width: deviceWidth,
    height: "auto",
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: "#fff",
  },
  input: {
    width: deviceWidth / 1.15,
    minHeight: 30,
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
    marginRight: 15,
    marginBottom: 5,
    color: "#606060",
  },
  commentBox: {
    flexDirection: "row",
  },
});
