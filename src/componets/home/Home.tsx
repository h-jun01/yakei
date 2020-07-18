import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  signOut: () => void;
  title: string;
};

//主に見た目に関する記述はこのファイル
const Home: FC<Props> = ({ ...props }) => {
  const { navigation, signOut, title } = props;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}の画面</Text>
      <Button
        title="地図の詳細"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button title="ログアウト" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
