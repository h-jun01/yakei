import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import Setting from "../../components/organisms/Setting";

type UserScreenNavigationProp = StackNavigationProp<
  UserScreenStackParamList,
  | "editProfile"
  | "passwordReset"
  | "notice"
  | "help"
  | "termsOfService"
  | "privacyPolicy"
>;

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerSetting: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  return <Setting navigation={navigation} />;
};

export default ContainerSetting;
