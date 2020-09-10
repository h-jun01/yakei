import React, { FC } from "react";
import { RouteProp } from "@react-navigation/native";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import ImageList from "../../components/organisms/ImageList";

type ImageListScreenRouteProp = RouteProp<
  HomeScreenStackParamList | PickUpScreenStackParamList,
  "detail"
>;

type Props = {
  route: ImageListScreenRouteProp;
  navigation: any;
};

const ImageListContainer: FC<Props> = ({ route, navigation }) => {
  const photoDataList = route.params.photoDataList;

  return <ImageList photoDataList={photoDataList} navigation={navigation} />;
};

export default ImageListContainer;
