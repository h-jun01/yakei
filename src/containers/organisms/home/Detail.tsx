import React from "react";
import { View, Text } from "react-native";
import Detail from "../../../components/organisms/home/Detail";

//主に処理に関する記述はこのファイル
const ContainerDetail = ({ route }, props) => {
  //例）このファイルで作った処理をcomponents側に渡す
  const { allPhotoId } = route.params;
  return <Detail allPhotoId={JSON.stringify(allPhotoId)} />;
};

export default ContainerDetail;
