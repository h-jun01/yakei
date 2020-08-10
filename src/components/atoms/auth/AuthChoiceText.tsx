import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/auth/auth";

const AuthChoiceText: FC = () => {
  return (
    <View style={styles.borderBox}>
      <View style={styles.borderItem} />
      <Text style={styles.orText}>または</Text>
      <View style={styles.borderItem} />
    </View>
  );
};

export default AuthChoiceText;
