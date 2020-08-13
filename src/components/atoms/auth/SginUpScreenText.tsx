import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth/auth";

type Props = {
  navigation: any;
};

const SginUpScreenText: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text style={styles.textColor}>
        登録することで、
        <Text
          style={styles.attention}
          onPress={() => navigation.navigate("termsOfService")}
        >
          利用規約
        </Text>
        及び
        <Text
          style={styles.attention}
          onPress={() => navigation.navigate("privacyPolicy")}
        >
          プライバシーポリシー
        </Text>
        に同意するものとします。
      </Text>
    </View>
  );
};

export default SginUpScreenText;
