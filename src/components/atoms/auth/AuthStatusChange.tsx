import React, { FC } from "react";
import { Text, SafeAreaView, GestureResponderEvent } from "react-native";
import { styles } from "../../../styles/auth/auth";

type Props = {
  text: string;
  navigation: ((event: GestureResponderEvent) => void) | undefined;
};

const AuthStatusChange: FC<Props> = ({ ...props }) => {
  const { text, navigation } = props;
  return (
    <SafeAreaView style={styles.authChangeWrap}>
      <Text style={styles.authChangeText} onPress={navigation}>
        {text}
      </Text>
    </SafeAreaView>
  );
};

export default AuthStatusChange;
