import React, { FC, useEffect } from "react";
import { TextInput } from "react-native";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import { photoFireStore } from "../../firebase/photoFireStore";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { setCommentDataList, setIsInputForm } from "../../actions/postedData";

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
  } = route.params;

  const textInputRef = React.useRef<null | TextInput>(null);

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const commentDataList = useSelector(selrctCommentDataList);

  const dispatch = useDispatch();

  // コメント取得
  useEffect(() => {
    photoFireStore.getCommentList(photo_id).then((res) => {
      res && dispatch(setCommentDataList(res.reverse()));
    });
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
      createTime={createTime}
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
