import React from "react";
import Detail from "../../componets/user/Detail";

//主に処理に関する記述はこのファイル
const ContainerDetail = () => {
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "ユーザ";

  return <Detail title={title} />;
};

export default ContainerDetail;
