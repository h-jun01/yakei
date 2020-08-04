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
      {itemList1.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text onPress={item.navigation}>
            <Text>{item.leftIcon}</Text>
            <Text>{item.label}</Text>
            <Text>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
      <View style={styles.borderItem} />
      {itemList2.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text onPress={item.navigation}>
            <Text>{item.leftIcon}</Text>
            <Text>{item.label}</Text>
            <Text>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
      <View style={styles.borderItem} />
      {itemList3.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text onPress={item.navigation}>
            <Text>{item.leftIcon}</Text>
            <Text>{item.label}</Text>
            <Text>{item.rightIcon}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SettingItem;
