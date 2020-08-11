import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { Size } from '../thema/fonts'
import {baseColor,utilityColor} from '../thema/colors'

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
    color : baseColor.text,
  },
  leftIcon: {
    fontSize: Size.Large,
  },
  itemLabel: {
    padding: 111,
    fontSize: Size.Normal,
    fontWeight: "700",
  },
  rightIcon: {
    fontSize: Size.Large,
  },
  borderItem: {
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    width: deviceWidth,
    height: 1,
    opacity: 0.5,
  },
});
