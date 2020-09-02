import React, { FC, useState, useEffect } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import { commentFireStore } from "../../firebase/commentFireStore";
import { useDisplayTime } from "../../utilities/hooks/date";
import PostedPageItems from "../../components/molecules/PostedPageItems";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  favoriteNumber: number;
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
    favoriteNumber,
    latitude,
    longitude,
  } = props;

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;

  const commentDataList = useSelector(selrctCommentDataList);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean>(false);

  const date = useDisplayTime(create_time.toDate());

  // コメント数取得
  useEffect(() => {
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      setCommentCount(res.length);
    });
  }, [commentDataList]);

  // お気に入り押下時
  const pressedFavorite = async (photo_id: string) => {
    await accountFireStore.updateFavoriteList(photo_id);
    setIsFavoriteStatus(true);
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
