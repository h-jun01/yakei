import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../../index";
import { StackParamList } from "../../../index";

export type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Search">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: SearchScreenNavigationProp;
  title: string;
};

//主に見た目に関する記述はこのファイル
const Search: FC<Props> = ({ ...props }) => {
  const { navigation, title } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}画面</Text>
      <Button
        title="検索の詳細"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default Search;
