import React, { FC } from "react";
import User, {
  UserScreenNavigationProp,
} from "../../../componets/organisms/user/User";
import { RootState } from "../../../reducers/index";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../../../firebase/firebase";
import { accountFireStore } from "../../../firebase/accountFireStore";
import { setUserData } from "../../../actions/user";
import { photoFireStore } from "../../../firebase/photoFireStore";
import { setPhotoListData } from "../../../actions/photo";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerUser: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  //ユーザ名,アイコン,写真一覧を取得
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectHeaderImage = (state: RootState) =>
    state.userReducer.userHeaderImg;
  const selectSelfIntroduction = (state: RootState) =>
    state.userReducer.selfIntroduction;
  const selectPhotoDataList = (state: RootState) =>
    state.photoReducer.photoDataList;
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const headerImage = useSelector(selectHeaderImage);
  const selfIntroduction = useSelector(selectSelfIntroduction);
  const photoDataList = useSelector(selectPhotoDataList);

  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await accountFireStore.getUser(user.uid).then((documentSnapshot) => {
          dispatch(setUserData(documentSnapshot.data()));
        });
        await photoFireStore.getPhotoList(user.uid).then((documentSnapshot) => {
          dispatch(setPhotoListData(documentSnapshot.data()));
        });
      }
    });
  }, []);

  return (
    <User
      navigation={navigation}
      name={name}
      image={image}
      headerImage={headerImage}
      selfIntroduction={selfIntroduction}
      photoDataList={photoDataList}
    />
  );
};

export default ContainerUser;
