import React, { FC, useState, useEffect } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import { commentFireStore } from "../../firebase/commentFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { useDisplayTime } from "../../utilities/hooks/date";
import { upDateFavoriteList } from "../../actions/user";
import PostedPageItems from "../../components/molecules/PostedPageItems";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
};

const PostedPageItemsContainer: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    latitude,
    longitude,
  } = props;

  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;

  const favoriteList = useSelector(selectFavoriteList);

  const [commentCount, setCommentCount] = useState<number>(0);
  const [favoriteNumber, setFavoriteNumber] = useState<number>(0);
  const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean>(false);

  const dispach = useDispatch();

  const date = useDisplayTime(create_time.toDate());

  // お気に入り数取得
  useEffect(() => {
    photoFireStore.getFavoriteNumber(photo_id).then((res) => {
      setFavoriteNumber(res);
    });
  }, [favoriteList]);

  // コメント数取得
  useEffect(() => {
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      setCommentCount(res.length);
    });
  }, []);

  // お気に入りチェック
  useEffect(() => {
    if (favoriteList.indexOf(photo_id) !== -1) {
      setIsFavoriteStatus(true);
    } else {
      setIsFavoriteStatus(false);
    }
  });

  // お気に入り押下時
  const pressedFavorite = async () => {
    if (!isFavoriteStatus) {
      await accountFireStore.updateFavoriteList(photo_id);
      await photoFireStore.IncrementFavoriteNumber(photo_id, favoriteNumber);
      await photoFireStore.getFavoriteNumber(photo_id).then((res) => {
        setFavoriteNumber(res);
      });

      const newFavoriteList = favoriteList.slice();
      newFavoriteList.push(photo_id);
      dispach(upDateFavoriteList(newFavoriteList));

      setIsFavoriteStatus(true);
    } else {
      await accountFireStore.deleteFavoriteItem(photo_id);
      await photoFireStore.DecrementFavoriteNumber(photo_id, favoriteNumber);
      await photoFireStore.getFavoriteNumber(photo_id).then((res) => {
        setFavoriteNumber(res);
      });

      const newFavoriteList = favoriteList.slice();
      newFavoriteList.splice(newFavoriteList.indexOf(photo_id), 1);
      dispach(upDateFavoriteList(newFavoriteList));

      setIsFavoriteStatus(false);
    }
  };

  return (
    <PostedPageItems
      navigation={navigation}
      photo_id={photo_id}
      uid={uid}
      create_time={create_time}
      url={url}
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
      commentCount={commentCount}
      date={date}
      isFavoriteStatus={isFavoriteStatus}
      pressedFavorite={pressedFavorite}
    />
  );
};

export default PostedPageItemsContainer;
