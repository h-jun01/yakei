import { StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1C3952",
  },
  authBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  authWrap: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 25,
    backgroundColor: utilityColor.inputBack,
    borderRadius: 10,
  },

  //アプリ名
  titleWrap: {
    marginBottom: 50,
  },
  titleText: {
    color: baseColor.text,
    textAlign: "center",
    fontSize: 40,
  },

  //input
  inputItemName: {
    color: baseColor.text,
    fontSize: Size.Small,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: utilityColor.border,
    fontSize: Size.Large,
  },

  //authBtn
  buttonBack: {
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },

  // 利用規約
  text: {
    marginTop: 15,
  },
  textColor: {
    color: baseColor.text,
    fontSize: Size.Small,
    textAlign: "center",
    lineHeight: Size.lineHeight,
  },
  attention: {
    color: baseColor.accent,
    fontWeight: "bold",
    fontSize: Size.NormalS,
  },

  //または
  borderBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15,
  },
  orText: {
    color: baseColor.text,
    paddingHorizontal: 30,
    fontSize: Size.Small,
  },
  borderItem: {
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    width: 100,
    height: 1,
    opacity: 0.5,
  },

  //連携ログイン
  twitterBack: {
    backgroundColor: "#DC4E42",
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 15,
  },

  authChangeWrap: {
    height: 58,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: utilityColor.authNav,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: utilityColor.border,
  },
  authChangeText: {
    color: baseColor.text,
    fontSize: Size.Small,
    padding: 20,
  },
});
