import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { setIsInputForm } from "../../actions/postedData";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
};

const KeyboardInputViewContainer: FC<Props> = ({ textInputRef }) => {
  const selrctIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;
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

  return (
    <KeyboardInputView
      textInputRef={textInputRef}
      isInputForm={isInputForm}
      onSubmit={onSubmit}
      onBlur={onBlur}
    />
  );
};

export default KeyboardInputViewContainer;
