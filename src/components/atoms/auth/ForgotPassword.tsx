import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth/auth";

type Props = {
  navigation: any;
};

const ForgotPassword: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.text}>
      <Text
        style={styles.textColor}
        onPress={() => navigation.navigate("passwordReset")}
      >
        パスワードをお忘れの場合はこちら
      </Text>
    </View>
  );
};

export default ForgotPassword;
