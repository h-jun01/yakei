import React, { FC } from "react";
// import Detail from "../../../components/organisms/home/Detail";
import ImageList from "../../../components/atoms/ImageList";

type Props = {
  route: any;
  navigation: any;
};

const ContainerDetail: FC<Props> = ({ route, navigation }) => {
  const { photoDataList } = route.params;
  return <ImageList photoDataList={photoDataList} navigation={navigation} />;
};

export default ContainerDetail;
