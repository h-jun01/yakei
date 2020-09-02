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
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const allPhotoDataList = useSelector(selectAllPhotoDataList);
  const photoDataList = useSelector(selectPhotoDataList);
  const favoriteList = useSelector(selectFavoriteList);

  const [favoriteItems, setFavoriteItems] = React.useState<any>([]);

  useEffect(() => {
    const array: firebase.firestore.DocumentData[] = [];
    favoriteList.forEach((photo_id) => {
      array.push(
        ...allPhotoDataList.filter((res) => res.photo_id === photo_id)
      );
    });
    setFavoriteItems(array);
  }, []);

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
