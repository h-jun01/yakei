import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth";

const ForgotPassword: FC = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.textColor}>パスワードをお忘れですか</Text>
    </View>
  );
};

export default ForgotPassword;
