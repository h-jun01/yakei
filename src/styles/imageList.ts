import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../utilities/dimensions";
import { baseColor, utilityColor } from "./thema/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: baseColor.base,
  },
  allWrap: {
    marginBottom: 10,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 180,
    marginRight: 15,
  },
  //評価
  PostIcon: {
    color: "#fff",
    fontWeight: "500",
    marginRight: 5,
  },
  stateNum: {
    color: "#fff",
    fontWeight: "400",
    marginRight: 10,
  },
  imageSize: {
    width: deviceWidth,
    height: deviceHeight / 3.5,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  userName: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 3,
  },
  time: {
    fontSize: 12,
    color: "#C0C0C0",
  },
  dotsVertical: {
    marginTop: 5,
    marginLeft: "auto",
    marginRight: 10,
    color: "#fff",
  },
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginRight: "auto",
  },
});
