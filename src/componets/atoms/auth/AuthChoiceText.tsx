import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth";

const AuthChoiceText: FC = () => {
  return (
    <View style={styles.borderBox}>
      <View style={styles.borderLeft} />
      <Text style={styles.orText}>または</Text>
      <View style={styles.borderRight} />
    </View>
  );
};

export default AuthChoiceText;
