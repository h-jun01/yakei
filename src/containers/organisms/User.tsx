import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import User from "../../components/organisms/User";
import { useState } from "react";

type Props = {
  navigation: any;
};

const ContainerUser: FC<Props> = ({ navigation }) => {
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectHeaderImage = (state: RootState) =>
    state.userReducer.userHeaderImg;
  const selectSelfIntroduction = (state: RootState) =>
    state.userReducer.selfIntroduction;
  const selectMyPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;

  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const headerImage = useSelector(selectHeaderImage);
  const selfIntroduction = useSelector(selectSelfIntroduction);
  const myPhotoDataList = useSelector(selectMyPhotoDataList);
  const favoriteList = useSelector(selectFavoriteList);
  const bottomHeight = useSelector(selectBottomHeight);

  const [myPhotoDataListCount, setMyPhotoDataListCount] = useState<number>(0);
  const [favoriteListCount, setFavoriteListCount] = useState<number>(0);

  useEffect(() => {
    setMyPhotoDataListCount(myPhotoDataList.length);
  });

  useEffect(() => {
    setFavoriteListCount(favoriteList.length);
  });

  return (
    <User
      navigation={navigation}
      name={name}
      image={image}
      headerImage={headerImage}
      selfIntroduction={selfIntroduction}
      myPhotoDataListCount={myPhotoDataListCount}
      favoriteListCount={favoriteListCount}
      bottomHeight={bottomHeight}
    />
  );
};

export default ContainerUser;
