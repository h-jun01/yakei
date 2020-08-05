import React, { FC } from "react";
import Search, {
  SearchScreenNavigationProp,
} from "../../../componets/organisms/search/Search";

type Props = {
  navigation: SearchScreenNavigationProp;
};

//主に見た目に関する記述はこのファイル
const ContainerSearch: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "検索";

  return <Search navigation={navigation} title={title} />;
};

export default ContainerSearch;
