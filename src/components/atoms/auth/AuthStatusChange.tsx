import React, { FC } from "react";
import { Text, GestureResponderEvent, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/auth/auth";
import { utilityColor } from "../../../styles/thema/colors";

type Props = {
  text: string;
  navigation: ((event: GestureResponderEvent) => void) | undefined;
};

const AuthStatusChange: FC<Props> = ({ ...props }) => {
  const { text, navigation } = props;
  return (
    <TouchableHighlight
      style={styles.authChangeWrap}
      underlayColor={utilityColor.authNav}
      onPress={navigation}
    >
      <Text style={styles.authChangeText}>{text}</Text>
    </TouchableHighlight>
  );
};

export default AuthStatusChange;
