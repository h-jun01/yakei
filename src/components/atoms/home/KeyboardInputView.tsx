import React, { FC } from "react";
import { TextInput } from "react-native";
import { UseInputResult } from "../../../utilities/hooks/input";
import KeyboardStickyView from "rn-keyboard-sticky-view";

type Props = {
  inputValue: UseInputResult;
};

const KeyboardInputView: FC<Props> = ({ inputValue }) => {
  return (
    <KeyboardStickyView>
      <TextInput
        {...inputValue}
        onSubmitEditing={() => alert(inputValue.value)}
        placeholder="コメントを入力..."
      />
    </KeyboardStickyView>
  );
};

export default KeyboardInputView;
