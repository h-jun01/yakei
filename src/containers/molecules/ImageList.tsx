import React, { FC } from "react";
import ImageList from "../../components/molecules/ImageList";

type Props = {
  route: any;
  navigation: any;
};

const ImageListContainer: FC<Props> = ({ route, navigation }) => {
  const { photoDataList } = route.params;

  return <ImageList photoDataList={photoDataList} navigation={navigation} />;
};

export default ImageListContainer;
