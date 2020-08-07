import React, { FC } from "react";
import SettingItem from "../../componets/molecules/SettingItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { accountFireStore } from "../../firebase/accountFireStore";

type ItemList = {
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  label: string;
  navigation?: () => void;
};

type Props = {
  navigation: any;
};

const SettingItemContainer: FC<Props> = ({ navigation }) => {
  const itemList1: ItemList[] = [
    {
      leftIcon: <MaterialCommunityIcons name="pencil" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "プロフィール編集",
      navigation: () => navigation.navigate("プロフィール編集"),
    },
    {
      leftIcon: <MaterialCommunityIcons name="key" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "パスワード再設定",
    },
    {
      leftIcon: <MaterialCommunityIcons name="bell" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "お知らせ",
      navigation: () => navigation.navigate("お知らせ"),
    },
  ];

  const itemList2: ItemList[] = [
    {
      leftIcon: <MaterialCommunityIcons name="cloud-question" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "ヘルプ",
    },
    {
      leftIcon: <MaterialCommunityIcons name="alert-circle" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "利用規約",
      navigation: () => navigation.navigate("利用規約"),
    },
    {
      leftIcon: <MaterialCommunityIcons name="alert-circle" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "プライバシーポリシー",
      navigation: () => navigation.navigate("プライバシーポリシー"),
    },
  ];

  const itemList3: ItemList[] = [
    {
      leftIcon: <MaterialCommunityIcons name="logout" />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" />,
      label: "退会",
    },
    {
      leftIcon: <MaterialCommunityIcons name="logout" />,
      label: "ログアウト",
      navigation: () => accountFireStore.signOutUser(),
    },
  ];
  return (
    <SettingItem
      itemList1={itemList1}
      itemList2={itemList2}
      itemList3={itemList3}
    />
  );
};

export default SettingItemContainer;
