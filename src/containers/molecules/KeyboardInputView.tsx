import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { setInputCommentValue, setIsInputForm } from "../../actions/postedData";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
};

const KeyboardInputViewContainer: FC<Props> = ({ textInputRef }) => {
  const selectInputValue = (state: RootState) =>
    state.postedDataReducer.inputValue;
  const selrctIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;
  const inputValue = useSelector(selectInputValue);
  const isInputForm = useSelector(selrctIsInputForm);

  const dispatch = useDispatch();

  //コメントを送信したとき
  const onSubmit = () => {
    Keyboard.dismiss();
    dispatch(setIsInputForm(false));
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
