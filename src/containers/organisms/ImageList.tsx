import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootState } from "../../reducers/index";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import ImageList from "../../components/organisms/ImageList";

type ImageListScreenNavigationProp = StackNavigationProp<
  HomeScreenStackParamList | PickUpScreenStackParamList,
  "detail"
>;

type ImageListScreenRouteProp = RouteProp<
  HomeScreenStackParamList | PickUpScreenStackParamList,
  "detail"
>;

type Props = {
  route: ImageListScreenRouteProp;
  navigation: ImageListScreenNavigationProp;
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
