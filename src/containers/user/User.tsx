import React, { FC } from "react";
import User, { UserScreenNavigationProp } from "../../componets/user/User";

type Props = {
  navigation: UserScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerUser: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "ユーザ";

  return <User navigation={navigation} title={title} />;
};

export default ContainerUser;
