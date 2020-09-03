import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/index";
import { setFavoriteItems } from "../../actions/favorite";
import TabMenu from "../../components/molecules/TabMenu";

type Props = {
  navigation: any;
};

const TabMenuContainer: FC<Props> = ({ navigation }) => {
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const selectFavoriteItems = (state: RootState) =>
    state.favoriteReducer.favoriteItems;

  const allPhotoDataList = useSelector(selectAllPhotoDataList);
  const photoDataList = useSelector(selectPhotoDataList);
  const favoriteList = useSelector(selectFavoriteList);
  const favoriteItems = useSelector(selectFavoriteItems);

  const dispatch = useDispatch();

  // お気に入り抽出
  useEffect(() => {
    const fechDataList: firebase.firestore.DocumentData[] = [];
    favoriteList.forEach((photo_id) => {
      fechDataList.push(
        ...allPhotoDataList.filter((res) => res.photo_id === photo_id)
      );
    });
    dispatch(setFavoriteItems(fechDataList));
  }, [favoriteList]);

  return (
    <TabMenu
      navigation={navigation}
      photoDataList={photoDataList}
      favoriteItems={favoriteItems}
    />
  );
};

export default TabMenuContainer;
