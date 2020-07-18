import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";

export type UserScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "User">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: UserScreenNavigationProp;
  title: string;
};

//主に見た目に関する記述はこのファイル
const User: FC<Props> = ({ ...props }) => {
  const { navigation, title } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{title}ページ</Text>
      <Button
        title="ユーザページの詳細"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default User;
