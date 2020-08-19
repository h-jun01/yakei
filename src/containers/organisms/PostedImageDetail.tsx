import React, { FC, useState, useEffect } from "react";
import { useInput } from "../../utilities/hooks/input";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import { photoFireStore } from "../../firebase/photoFireStore";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { setCommentDataList } from "../../actions/comment";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const {
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
    // commentList,
  } = route.params;

  const selectInputCommentValue = (state: RootState) =>
    state.commentReducer.inputValue;
  const selrctCommentDataList = (state: RootState) =>
    state.commentReducer.commentDataList;
  const inputCommentValue = useSelector(selectInputCommentValue);
  const commentDataList = useSelector(selrctCommentDataList);
  const dispatch = useDispatch();

  // コメント取得
  useEffect(() => {
    photoFireStore.getCommentList(photo_id).then((res) => {
      res && dispatch(setCommentDataList(res.reverse()));
    });
  }, [photo_id, setCommentDataList]);

  return (
    <PostedImageDetail
      photo_id={photo_id}
      uid={uid}
      createTime={createTime}
      url={url}
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
      commentDataList={commentDataList}
      //   commentList={commentList}
      //   commentCount={commentCount}
      //   inputValue={inputValue}
    />
  );
};

export default PostedImageDetailContainer;
