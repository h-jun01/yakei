import React from "react";
import Detail from "../../../components/organisms/search/Detail";

//主に処理に関する記述はこのファイル
const ContainerDetail = () => {
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "検索";

  return <Detail title={title} />;
};

export default ContainerDetail;
