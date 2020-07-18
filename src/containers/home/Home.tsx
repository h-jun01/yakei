import React, { FC } from "react";
import { auth } from "../../firebase/firebase";
import Home, { HomeScreenNavigationProp } from "../../componets/home/Home";

type Props = {
  navigation: HomeScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  //例）このファイルで作った処理をcomponents側に渡す
  const title = "地図";

  const signOut = (): void => {
    auth.signOut();
  };

  return <Home navigation={navigation} signOut={signOut} title={title} />;
};

export default ContainerHome;
