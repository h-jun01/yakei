import React, { FC, useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "../../reducers/index";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { NotificationScreenStackParamList } from "../../screens/NotificationScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { accountFireStore } from "../../firebase/accountFireStore";
import OtherUser from "../../components/organisms/OtherUser";

type UserScreenNavigationProp = StackNavigationProp<
  UserScreenStackParamList,
  "post"
>;

type OtherScreenRouteProp = RouteProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | NotificationScreenStackParamList
  | UserScreenStackParamList,
  "otherUser"
>;

type Props = {
  route: OtherScreenRouteProp;
  navigation: UserScreenNavigationProp;
};

const OtherUserContainer: FC<Props> = ({ route, navigation }) => {
  const uid = route.params.uid;

  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const allPhotoDataList = useSelector(selectAllPhotoDataList);

  const [userData, setUserData] = useState<firebase.firestore.DocumentData>();
  const [postDataList, setPostDataList] = useState<
    firebase.firestore.DocumentData[]
  >([]);
  const [favoriteDataList, setFavoriteDataList] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  // ユーザー情報を取得
  useEffect(() => {
    accountFireStore.getUser(uid).then((res) => {
      setUserData(res.data());
    });
  }, []);

  // 投稿抽出
  useEffect(() => {
    setPostDataList(allPhotoDataList.filter((res) => res.uid === uid));
  }, []);

  // お気に入り抽出
  useEffect(() => {
    const fechDataList: firebase.firestore.DocumentData[] = [];
    userData?.favorite_list.forEach((photo_id: string) => {
      fechDataList.push(
        ...allPhotoDataList.filter((res) => res.photo_id === photo_id)
      );
    });
    setFavoriteDataList(fechDataList);
  }, [userData]);

  return (
    <OtherUser
      navigation={navigation}
      userData={userData}
      favoriteDataList={favoriteDataList}
      postDataList={postDataList}
    />
  );
};

export default OtherUserContainer;
