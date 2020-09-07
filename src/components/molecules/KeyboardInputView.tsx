import React, { FC } from "react";
import { Text, TextInput } from "react-native";
import { UseInputResult } from "../../utilities/hooks/input";
import { styles } from "../../styles/postedImageDetail";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  inputValue: UseInputResult;
  isInputForm: boolean;
  addComment: () => void;
  onBlur: () => void;
};

const KeyboardInputView: FC<Props> = ({ ...props }) => {
  const { textInputRef, inputValue, isInputForm, addComment, onBlur } = props;

  return (
    <KeyboardStickyView
      style={isInputForm ? styles.keyboardViewTrue : styles.keyboardViewFalse}
    >
      <TextInput
        multiline
        ref={textInputRef}
        blurOnSubmit={false}
        placeholder="コメントを入力..."
        style={styles.input}
        onBlur={() => onBlur()}
        {...inputValue}
      />
      <Text style={styles.sendIcon} onPress={() => addComment()}>
        <FontAwesome name="send" size={20} />
      </Text>
    </KeyboardStickyView>
  );
};

export default KeyboardInputView;
