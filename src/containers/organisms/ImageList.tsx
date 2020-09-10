import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
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
  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );

  return (
    <ImageList
      photoDataList={photoDataList}
      navigation={navigation}
      bottomHeight={bottomHeight}
    />
  );
};

export default ImageListContainer;
