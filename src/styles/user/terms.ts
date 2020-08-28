import { StyleSheet } from "react-native";
import { baseColor } from "../thema/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: baseColor.base,
  },
  title: {
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#fff",
  },
  explanation: {
    lineHeight: 15,
    letterSpacing: 0.5,
    color: "#fff",
  },
  item: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    color: "#fff",
  },
  contents: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 15,
    letterSpacing: 0.5,
    color: "#fff",
  },
  details: {
    marginLeft: 10,
    marginBottom: 5,
    lineHeight: 15,
    letterSpacing: 0.5,
    color: "#fff",
  },
  fin: {
    textAlign: "right",
    paddingTop: 20,
    paddingBottom: 15,
    color: "#fff",
  },
});
