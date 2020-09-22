import React, { FC, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { setAspectRatioIntoState } from "../../utilities/imageAspect";
import PhotoDataItem from "../../components/molecules/PhotoDataItem";

type UserScreenNavigationProp = StackNavigationProp<UserScreenStackParamList>;

type Props = {
  navigation: UserScreenNavigationProp;
  item: firebase.firestore.DocumentData;
};

const PhotoDataItemContainer: FC<Props> = ({ navigation, item }) => {
  const [aspectRatio, setAspectRatio] = useState<number>(0);

  useEffect(() => {
    setAspectRatioIntoState(item.url, setAspectRatio);
  }, []);
  return (
    <PhotoDataItem
      navigation={navigation}
      item={item}
      aspectRatio={aspectRatio}
    />
  );
};

export default PhotoDataItemContainer;
