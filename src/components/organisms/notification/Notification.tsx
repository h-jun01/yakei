import React, { FC } from "react";
import { View, Text, Button } from "react-native";

type Props = {
  navigation: any;
  title: string;
};

//主に見た目に関する記述はこのファイル
const Notification: FC<Props> = ({ ...props }) => {
  const { navigation, title } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}画面</Text>
    </View>
  );
};

export default Notification;
