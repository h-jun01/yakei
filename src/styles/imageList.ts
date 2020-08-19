import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../utilities/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  user: {
    marginLeft: 15,
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
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 180,
  },
  imageSize: {
    width: deviceWidth,
    height: deviceHeight / 3.5,
  },
});
