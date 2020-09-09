import { StyleSheet } from "react-native";
import { Size } from '../thema/fonts'
import { baseColor, utilityColor } from '../thema/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: baseColor.base,
  },
  itemWrap: {
    flexDirection: "column"
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2.8%'),
  },
  leftIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginRight: wp('3%'),
  },
  itemLabel: {
    fontSize: Size.Normal,
    fontWeight: "700",
    color : baseColor.text,
  },
  rightIcon: {
    fontSize: Size.Large,
    fontWeight: "400",
    color: baseColor.text,
    marginLeft: "auto",
  },
  borderItem: {
    width: wp('100%'),
    height: 1,
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    opacity: 0.5,
  },
});
