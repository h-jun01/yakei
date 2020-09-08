import React, { FC } from "react";
import SettingItem from "../../components/molecules/SettingItem";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { accountFireStore } from "../../firebase/accountFireStore";
import { Size } from "../../styles/thema/fonts";

type ItemList = {
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  label: string;
  navigation: () => void;
};

type Props = {
  navigation: any;
};

const SettingItemContainer: FC<Props> = ({ navigation }) => {
  const itemList1: ItemList[] = [
    {
      leftIcon: <MaterialCommunityIcons name="pencil" size={18} />,
      rightIcon: <MaterialCommunityIcons name="chevron-right" size={18} />,
      label: "プロフィール編集",
      navigation: () => navigation.navigate("editProfile"),
    },
    {
      leftIcon: <MaterialCommunityIcons name="key" size={Size.Xlarge} />,
      rightIcon: (
        <MaterialCommunityIcons name="chevron-right" size={Size.Xlarge} />
      ),
      label: "パスワード再設定",
      navigation: () => navigation.navigate("passwordReset"),
    },
    {
      leftIcon: <MaterialCommunityIcons name="bell" size={Size.Xlarge} />,
      rightIcon: (
        <MaterialCommunityIcons name="chevron-right" size={Size.Xlarge} />
      ),
      label: "お知らせ",
      navigation: () => navigation.navigate("notice"),
    },
  ];

  const itemList2: ItemList[] = [
    {
      leftIcon: (
        <MaterialCommunityIcons name="cloud-question" size={Size.Xlarge} />
      ),
      rightIcon: (
        <MaterialCommunityIcons name="chevron-right" size={Size.Xlarge} />
      ),
      label: "ヘルプ",
      navigation: () => navigation.navigate("help"),
    },
    {
      leftIcon: (
        <MaterialCommunityIcons name="alert-circle" size={Size.Xlarge} />
      ),
      rightIcon: (
        <MaterialCommunityIcons name="chevron-right" size={Size.Xlarge} />
      ),
      label: "利用規約",
      navigation: () => navigation.navigate("termsOfService"),
    },
    {
      leftIcon: (
        <MaterialCommunityIcons name="alert-circle" size={Size.Xlarge} />
      ),
      rightIcon: (
        <MaterialCommunityIcons name="chevron-right" size={Size.Xlarge} />
      ),
      label: "プライバシーポリシー",
      navigation: () => navigation.navigate("privacyPolicy"),
    },
  ];

  const itemList3: ItemList[] = [
    {
      leftIcon: <MaterialCommunityIcons name="logout" size={Size.Xlarge} />,
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
