import React, { FC } from "react";
import { Text, SafeAreaView, GestureResponderEvent } from "react-native";

type Props = {
  text: string;
  navigation: ((event: GestureResponderEvent) => void) | undefined;
};

const AuthStatusChange: FC<Props> = ({ ...props }) => {
  const { text, navigation } = props;
  return (
    <SafeAreaView>
      <Text onPress={navigation}>{text}</Text>
    </SafeAreaView>
  );
};

export default AuthStatusChange;
