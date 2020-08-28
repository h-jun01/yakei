import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { commentFireStore } from "../../firebase/commentFireStore";
import {
  setInputCommentValue,
  setIsInputForm,
  setCommentDataList,
} from "../../actions/postedData";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  photo_id: string;
};

const KeyboardInputViewContainer: FC<Props> = ({ textInputRef, photo_id }) => {
  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectInputValue = (state: RootState) =>
    state.postedDataReducer.inputValue;
  const selectIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;
  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const uid = useSelector(selectUid);
  const inputValue = useSelector(selectInputValue);
  const isInputForm = useSelector(selectIsInputForm);
  const commentDataList = useSelector(selrctCommentDataList);

  const dispatch = useDispatch();

  //コメントを送信
  const addComment = async () => {
    await commentFireStore
      .postedComment(photo_id, uid, inputValue, "2020-09-27 22:00")
      .then(() => {
        commentFireStore.getCommentDataList(photo_id).then((res) => {
          dispatch(setCommentDataList(res));
        });
      });
    dispatch(setInputCommentValue(""));
    dispatch(setIsInputForm(false));
    Keyboard.dismiss();
  };

  //キーボードが消えたとき
  const onBlur = () => {
    isInputForm && dispatch(setIsInputForm(false));
  };

  //コメント入力
  const onChangeText = (value: string) => {
    dispatch(setInputCommentValue(value));
  };

  return (
    <KeyboardInputView
      textInputRef={textInputRef}
      inputValue={inputValue}
      isInputForm={isInputForm}
      addComment={addComment}
      onBlur={onBlur}
      onChangeText={onChangeText}
    />
  );
};

export default KeyboardInputViewContainer;
