import React, { FC, useState, useEffect } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import { commentFireStore } from "../../firebase/commentFireStore";
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

  // コメント数取得
  useEffect(() => {
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      setCommentCount(res.length);
    });
  }, [commentDataList]);

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
    />
  );
};

export default PostedPageItemsContainer;
