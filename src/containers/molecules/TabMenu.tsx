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
  const selectAll = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const uid = useSelector(selectUid);
  const all = useSelector(selectAll);
  const photoDataList = useSelector(selectPhotoDataList);
  const favoriteList = useSelector(selectFavoriteList);

  const [favoriteItems, setFavoriteItems] = React.useState<any>([]);

  // useEffect(() => {
  //   setFavoriteItems(
  //     favoriteList.map((item) =>  all.filter((res) => res.photo_id === item)
  //     )
  //   );
  // }, []);

  // useEffect(() => {
  //   setFavoriteItems(
  //     all.filter((res) => {
  //       for (let i = 0; i < favoriteList.length; i++) {
  //         return res.photo_id === favoriteList[i];
  //       }
  //     })
  //   );
  // }, []);

  useEffect(() => {
    const array: any = [];
    for (let i = 0; i < favoriteList.length; i++) {
      photoFireStore.getFavoriteItem(favoriteList[i]).then(async (res) => {
        array.push(await res);
      });
    }
    setFavoriteItems(array);
  }, []);

  useEffect(() => {
    console.log(favoriteItems);
  }, []);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //         await accountFireStore.getUser(uid).then((res) => {
  //           dispatch(setUserData(res.data()));
  //         });
  //         await photoFireStore.getPhotoList(uid).then((res) => {
  //           dispatch(setPhotoListData(res));
  //         });
  //       }
  //     });
  //   }, []);

  return (
    <TabMenu
      navigation={navigation}
      photoDataList={photoDataList}
      favoriteList={favoriteList}
      favoriteItems={favoriteItems}
    />
  );
};

export default TabMenuContainer;
