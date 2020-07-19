import React, { FC } from "react";
import { accountFireStore } from "../../firebase/accountFireStore";
import Home, { HomeScreenNavigationProp } from "../../componets/home/Home";

type Props = {
  navigation: HomeScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  //例）このファイルで作った処理をcomponents側に渡す
  const title = "地図";

  return (
    <Home
      navigation={navigation}
      signOutUser={accountFireStore.signOutUser}
      title={title}
    />
  );
};

export default ContainerHome;
