import React, { FC, useEffect, useRef, useCallback } from "react";
import { TextInput } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types";
import { commentFireStore } from "../../firebase/commentFireStore";
import { setCommentDataList, setIsInputForm } from "../../actions/postedData";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";

type routeObj = {
  imageData: firebase.firestore.DocumentData;
  shouldHeaderLeftBeCross?: boolean;
};

type Props = {
  route: RouteProp<Record<string, routeObj>, string>;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const {
    photo_id,
    uid,
    create_time,
    url,
    latitude,
    longitude,
    photogenic_subject,
  } = route.params.imageData;

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;

  const commentDataList = useSelector(selrctCommentDataList);
  const textInputRef = useRef<null | TextInput>(null);
  const dispatch = useDispatch();

  // コメント取得
  useEffect(() => {
    const emptyCommentDataList = () => {
      dispatch(setCommentDataList([]));
    };
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      dispatch(setCommentDataList(res));
    });

    return () => emptyCommentDataList();
  }, [photo_id, setCommentDataList]);

  // コメント入力時にフォーカスさせる
  const focusOnInput = () => {
    textInputRef.current?.focus();
    dispatch(setIsInputForm(true));
  };

  return (
    <PostedImageDetail
      photo_id={photo_id}
      uid={uid}
      create_time={create_time}
      url={url}
      latitude={latitude}
      longitude={longitude}
      photogenic_subject={photogenic_subject}
      commentDataList={commentDataList}
      textInputRef={textInputRef}
      focusOnInput={focusOnInput}
    />
  );
};

export default PostedImageDetailContainer;
