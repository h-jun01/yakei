import React, { FC, useEffect, useRef, useCallback } from "react";
import { TextInput } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { photoFireStore } from "../../firebase/photoFireStore";
import { commentFireStore } from "../../firebase/commentFireStore";
import { setCommentDataList, setIsInputForm } from "../../actions/postedData";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const {
    photo_id,
    uid,
    create_time,
    url,
    favoriteNumber,
    latitude,
    longitude,
  } = route.params;

  const textInputRef = useRef<null | TextInput>(null);

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const commentDataList = useSelector(selrctCommentDataList);

  const dispatch = useDispatch();

  // コメント取得
  //   useEffect(() => {
  //     photoFireStore.getCommentList(photo_id).then((res) => {
  //       res && dispatch(setCommentDataList(res.reverse()));
  //     });
  //     const emptyCommentDataList = () => {
  //       dispatch(setCommentDataList([]));
  //     };

  //     return () => emptyCommentDataList();
  //   }, [photo_id, setCommentDataList]);
  //   const [commentDataList, set] = React.useState<any>([]);

  // コメント取得
  // コメント欄開いた状態で他のコメント欄も開くと少しバグる（早めに修正）
  useEffect(() => {
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      dispatch(setCommentDataList(res));
      //   set(res);
    });
    const emptyCommentDataList = () => {
      dispatch(setCommentDataList([]));
      //   set([]);
    };

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
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
      commentDataList={commentDataList}
      textInputRef={textInputRef}
      focusOnInput={focusOnInput}
    />
  );
};

export default PostedImageDetailContainer;
