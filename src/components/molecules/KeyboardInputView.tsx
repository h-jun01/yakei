import React, { FC } from "react";
import { Text, TextInput } from "react-native";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import { styles } from "../../styles/postedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  isInputForm: boolean;
  onSubmit: () => void;
  onBlur: () => void;
};

const KeyboardInputView: FC<Props> = ({ ...props }) => {
  const { textInputRef, isInputForm, onSubmit, onBlur } = props;

  return (
    <KeyboardStickyView
      style={isInputForm ? styles.keyboardView2 : styles.keyboardView}
    >
      <TextInput
        multiline
        ref={textInputRef}
        blurOnSubmit={false}
        returnKeyType="send"
        placeholder="コメントを入力..."
        style={styles.input}
        onBlur={() => onBlur()}
        onSubmitEditing={() => onSubmit()}
      />
      <Text style={styles.sendIcon}>
        <FontAwesome name="send" size={17} />
      </Text>
    </KeyboardStickyView>
  );
};

export default KeyboardInputView;
