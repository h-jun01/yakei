import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";

type ItemList = {
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  label: string;
  navigation?: () => void;
};

type Props = {
  itemList1: ItemList[];
  itemList2: ItemList[];
  itemList3: ItemList[];
};

const SettingItem: FC<Props> = ({ ...props }) => {
  const { itemList1, itemList2, itemList3 } = props;

  return (
    <View style={styles.container}>
      {/* 一段目 */}
      {itemList1.map((item, index) => (
        <View style={styles.itemWrap} key={index}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={item.navigation}
          >
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.borderItem} />

      {/* 二段目 */}
      {itemList2.map((item, index) => (
        <View style={styles.itemWrap} key={index}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={item.navigation}
          >
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.borderItem} />

      {/* 三段目 */}
      {itemList3.map((item, index) => (
        <View style={styles.itemWrap} key={index}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={item.navigation}
          >
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: baseColor.base,
  },
  itemWrap: {
    flexDirection: "column",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("2.8%"),
  },
  leftIcon: {
    fontSize: Size.Large,
    color: baseColor.text,
    marginRight: wp("3%"),
  },
  itemLabel: {
    fontSize: Size.Normal,
    fontWeight: "700",
    color: baseColor.text,
  },
  rightIcon: {
    fontSize: Size.Large,
    fontWeight: "400",
    color: baseColor.text,
    marginLeft: "auto",
  },
  borderItem: {
    width: wp("100%"),
    height: 1,
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    opacity: 0.5,
  },
});

export default SettingItem;
