import React, { FC } from "react";
import User, { UserScreenNavigationProp } from "../../componets/user/User";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerUser: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  //ユーザ名,アイコン,写真一覧を取得
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectPhotoDataList = (state: RootState) =>
    state.photoReducer.photoDataList;
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const photoDataList = useSelector(selectPhotoDataList);

  return (
    <User
      navigation={navigation}
      name={name}
      image={image}
      photoDataList={photoDataList}
    />
  );
};

export default ContainerUser;
