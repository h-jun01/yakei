import React, { FC } from "react";
import { View, Text } from "react-native";
import { UserScreenNavigationProp } from "./User";

type Props = {
  navigation: UserScreenNavigationProp;
  signOutUser: () => void;
};

const Setting: FC<Props> = ({ ...props }) => {
  const { navigation, signOutUser } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={() => navigation.navigate("プロフィール編集")}>
        プロフィール編集
      </Text>
      <Text>パスワード変更</Text>
      <Text>お知らせ</Text>
      <Text>ヘルプ</Text>
      <Text onPress={() => navigation.navigate("利用規約")}>利用規約</Text>
      <Text onPress={() => navigation.navigate("プライバシーポリシー")}>
        プライバシーポリシー
      </Text>
      <Text>アカウント削除</Text>
      <Text onPress={() => signOutUser()}>ログアウト</Text>
    </View>
  );
};

export default Setting;
