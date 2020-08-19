import React, { FC } from "react";
import { Text, TextInput, Alert } from "react-native";
import { UseInputResult } from "../../../utilities/hooks/input";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import { styles } from "../../../styles/postedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type Props = {
  // inputValue: UseInputResult;
  textInputRef: React.MutableRefObject<TextInput | null>;
  focusOnInput: () => void;
  show: boolean;
  setShow: any;
  onSubmit: any;
};

const KeyboardInputView: FC<Props> = ({
  textInputRef,
  focusOnInput,
  // inputValue,
  show,
  setShow,
  onSubmit,
}) => {
  // const textInputRef = React.useRef<null | TextInput>(null);
  // const focusOnInput = () => {
  //   textInputRef.current?.focus();
  // };
  return (
    <KeyboardStickyView
      style={show ? styles.keyboardView2 : styles.keyboardView}
    >
      <TextInput
        // {...inputValue}
        multiline
        ref={textInputRef}
        blurOnSubmit={false}
        returnKeyType="send"
        placeholder="コメントを入力..."
        style={styles.input}
        onBlur={() => {
          if (show) setShow(false);
        }}
        onSubmitEditing={() => onSubmit()}
      />
      <Text style={styles.sendIcon} onPress={() => focusOnInput()}>
        <FontAwesome name="send" size={17} />
      </Text>
    </KeyboardStickyView>
  );
};

export default KeyboardInputView;
