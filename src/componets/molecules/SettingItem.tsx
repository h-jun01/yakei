import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/user/setting";

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
          <Text style={styles.settingItem} onPress={item.navigation}>
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
      <View style={styles.borderItem} />

      {/* 二段目 */}
      {itemList2.map((item, index) => (
        <View style={styles.itemWrap} key={index}>
          <Text style={styles.settingItem} onPress={item.navigation}>
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
      <View style={styles.borderItem} />

      {/* 三段目 */}
      {itemList3.map((item, index) => (
        <View style={styles.itemWrap} key={index}>
          <Text style={styles.settingItem} onPress={item.navigation}>
            <Text style={styles.leftIcon}>{item.leftIcon}</Text>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Text style={styles.rightIcon}>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SettingItem;
