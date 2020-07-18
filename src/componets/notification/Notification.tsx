import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";

export type NotificationScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Notification">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: NotificationScreenNavigationProp;
  title: string;
};

//主に見た目に関する記述はこのファイル
const Notification: FC<Props> = ({ ...props }) => {
  const { navigation, title } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}画面</Text>
      <Button
        title="通知の詳細"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default Notification;
