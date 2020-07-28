import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  userImage: {
    width: 91,
    height: 91,
    backgroundColor: "#f00",
    borderRadius: 50,
  },
  imagesWrap: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  photoImage: {
    width: "32%",
    height: 116,
    borderRadius: 10,
    margin: 2,
  },
});
