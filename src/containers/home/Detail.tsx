import React from "react";
import { View, Text } from "react-native";
import Detail from "../../componets/home/Detail";

//主に処理に関する記述はこのファイル
const ContainerDetail = () => {
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "詳細";

  return <Detail title={title} />;
};

export default ContainerDetail;
