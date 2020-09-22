import React, { FC, useState, useEffect } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { setAspectRatioIntoState } from "../../utilities/imageAspect";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import ImageListItem from "../../components/molecules/ImageListItem";
import Spinner from "react-native-loading-spinner-overlay";

type ImageListScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "detail"
>;

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

type Props = {
  item: PhotoDataList;
  navigation: ImageListScreenNavigationProp;
  isLast: boolean;
};

const ImageListItemContainer: FC<Props> = ({ ...props }) => {
  const { item, navigation, isLast } = props;
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  useEffect(() => {
    setAspectRatioIntoState(item.url, setAspectRatio);
  }, []);

  return (
    <>
      {!aspectRatio ? (
        <Spinner
          visible
          textContent="読み込み中…"
          textStyle={{ color: "#fff", fontSize: 13 }}
          overlayColor="rgba(0,0,0,0.5)"
        />
      ) : (
        <ImageListItem
          item={item}
          navigation={navigation}
          isLast={isLast}
          aspectRatio={aspectRatio}
        />
      )}
    </>
  );
};

export default ImageListItemContainer;
