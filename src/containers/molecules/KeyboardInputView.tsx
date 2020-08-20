import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputCommentValue,
  setIsInputForm,
  setCommentDataList,
} from "../../actions/postedData";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
};

const KeyboardInputViewContainer: FC<Props> = ({ textInputRef }) => {
  const selectInputValue = (state: RootState) =>
    state.postedDataReducer.inputValue;
  const selectIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;
  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const inputValue = useSelector(selectInputValue);
  const isInputForm = useSelector(selectIsInputForm);
  const commentDataList = useSelector(selrctCommentDataList);

  const dispatch = useDispatch();

  //コメントを送信したとき
  const onSubmit = () => {
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
      onSubmit={onSubmit}
      onBlur={onBlur}
      onChangeText={onChangeText}
    />
  );
};

export default KeyboardInputViewContainer;
