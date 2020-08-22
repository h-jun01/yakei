import { StyleSheet } from "react-native";
import { Size } from '../thema/fonts'
import { baseColor, utilityColor } from '../thema/colors'
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";

export const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    flex: 1,
    backgroundColor: baseColor.base,
  },
  itemWrap: {
    flexDirection: "column"
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  leftIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginRight: 10,
  },
  itemLabel: {
    fontSize: Size.Normal,
    fontWeight: "700",
    color : baseColor.text,
  },
  rightIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginLeft: "auto",
  },
  borderItem: {
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    width: deviceWidth,
    height: 1,
    opacity: 0.5,
  },

  //中身
  //パスワード再設定
  passwdChangeWrap: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
  intro: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "400",
  },
  jiro: {
    marginTop: "5%",
  },
  passwdLabel: {
    color: utilityColor.inputLabel,
    fontSize: Size.Small,
    fontWeight: "600",
  },
  passwdInput: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "600",
  },
  submitButton: {
    width: "80%",
    backgroundColor: baseColor.accent,
    paddingVertical: 15,
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    borderRadius: 5,
  },
});
