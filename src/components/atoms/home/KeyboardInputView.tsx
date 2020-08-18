import React, { FC } from "react";
import { Text, TextInput } from "react-native";
import { UseInputResult } from "../../../utilities/hooks/input";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import { styles } from "../../../styles/postedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  inputValue: UseInputResult;
};

const KeyboardInputView: FC<Props> = ({ inputValue }) => {
  return (
    <KeyboardStickyView style={styles.keyboardView}>
      <TextInput
        {...inputValue}
        multiline
        blurOnSubmit={false}
        placeholder="コメントを入力..."
        style={styles.input}
        // onSubmitEditing={() => alert(inputValue.value)}
      />
      <Text style={styles.sendIcon}>
        <FontAwesome name="send" size={17} />
      </Text>
    </KeyboardStickyView>
  );
};

export default KeyboardInputView;
