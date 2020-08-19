import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const KeyboardInputViewContainer: FC<Props> = ({
  textInputRef,
  show,
  setShow,
}) => {
  const onSubmit = () => {
    Keyboard.dismiss();
    setShow(false);
  };

  return (
    <KeyboardInputView
      textInputRef={textInputRef}
      show={show}
      setShow={setShow}
      onSubmit={onSubmit}
    />
  );
};

export default KeyboardInputViewContainer;
