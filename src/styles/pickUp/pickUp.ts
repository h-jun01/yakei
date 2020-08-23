import { StyleSheet } from "react-native";
import { deviceWidth,deviceHeight } from "../../utilities/dimensions";
import { baseColor, utilityColor } from "../thema/colors";
import { Size } from "../thema/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: deviceWidth,
    //フッターの高さ+タイトルの高さ分あげる
    paddingBottom: 101,
  },
  image: {
    width: deviceWidth,
    height: deviceHeight / 3.5,
  },
  itemInfoWrap: {
    height: 64,
    width: deviceWidth,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    backgroundColor: utilityColor.itemFilter,
    padding: 15,
  },
  itemTitle: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "500",
    paddingBottom: 13,
  },
  itemTime: {
    fontSize: Size.Normal,
    fontWeight: "400",
    color: baseColor.text,
  },
});
