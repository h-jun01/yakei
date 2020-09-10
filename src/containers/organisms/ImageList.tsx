import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import ImageList from "../../components/organisms/ImageList";

type Props = {
  route: any;
  navigation: any;
};

const ImageListContainer: FC<Props> = ({ route, navigation }) => {
  const { photoDataList } = route.params;
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
