import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../styles/auth";

type Props = {
  navigation: any;
};

const SginUpScreenText: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text style={styles.textColor}>
        登録することで、
        <Text onPress={() => navigation.navigate("利用規約")}>利用規約</Text>
        及び
        <Text onPress={() => navigation.navigate("プライバシーポリシー")}>
          プライバシーポリシー
        </Text>
        に同意するものとします。
      </Text>
    </View>
  );
};

export default SginUpScreenText;
