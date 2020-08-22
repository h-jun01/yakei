import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { photoFireStore } from "../../firebase/photoFireStore";
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

  //コメントを送信したとき
  const addComment = async () => {
    await photoFireStore
      .upDateCommentList(photo_id, uid, inputValue, "test")
      .then(() => {
        photoFireStore.getCommentList(photo_id).then((res) => {
          res && dispatch(setCommentDataList(res.reverse()));
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
