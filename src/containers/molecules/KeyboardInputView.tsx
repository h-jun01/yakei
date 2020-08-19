import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { setIsInputForm } from "../../actions/postedData";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  //   show: boolean;
  //   setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const KeyboardInputViewContainer: FC<Props> = ({
  textInputRef,
  //   show,
  //   setShow,
}) => {
  const selrctIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;
  const dispatch = useDispatch();
  const isInputForm = useSelector(selrctIsInputForm);
  const onSubmit = () => {
    Keyboard.dismiss();
    // setShow(false);
    dispatch(setIsInputForm(false));
  };

  const onBlur = () => {
    if (isInputForm) {
      dispatch(setIsInputForm(false));
    }
  };

  return (
    <KeyboardInputView
      textInputRef={textInputRef}
      //   show={show}
      //   setShow={setShow}
      isInputForm={isInputForm}
      onSubmit={onSubmit}
      onBlur={onBlur}
    />
  );
};

export default KeyboardInputViewContainer;
