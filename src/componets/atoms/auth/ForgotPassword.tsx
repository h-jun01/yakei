import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth";

type Props = {
  navigation: any;
};

const ForgotPassword: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text
        style={styles.textColor}
        onPress={() => navigation.navigate("パスワード再設定")}
      >
        パスワードをお忘れですか?
      </Text>
    </View>
  );
};

export default ForgotPassword;
