import React, { FC } from "react";
import { Text, GestureResponderEvent, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/auth/auth";

type Props = {
  text: string;
  navigation: ((event: GestureResponderEvent) => void) | undefined;
};

const AuthStatusChange: FC<Props> = ({ ...props }) => {
  const { text, navigation } = props;
  return (
    <TouchableOpacity
      style={styles.authChangeWrap}
      activeOpacity={0.8}
      onPress={navigation}
    >
      <Text style={styles.authChangeText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthStatusChange;
