import React, { FC, useEffect } from "react";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { accountFireStore } from "../../firebase/accountFireStore";
import { setUserData } from "../../actions/user";
import { photoFireStore } from "../../firebase/photoFireStore";
import { setPhotoListData } from "../../actions/photo";
import TabMenu from "../../components/molecules/TabMenu";

type Props = {
  navigation: any;
};

const TabMenuContainer: FC<Props> = ({ navigation }) => {
  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const uid = useSelector(selectUid);
  const photoDataList = useSelector(selectPhotoDataList);
  const favoriteList = useSelector(selectFavoriteList);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await accountFireStore.getUser(uid).then((res) => {
          dispatch(setUserData(res.data()));
        });
        await photoFireStore.getPhotoList(uid).then((res) => {
          dispatch(setPhotoListData(res));
        });
      }
    });
  }, []);

  return <TabMenu photoDataList={photoDataList} favoriteList={favoriteList} />;
};

export default TabMenuContainer;
