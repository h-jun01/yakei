import React, { FC, Fragment } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { baseColor,utilityColor } from "../../../styles/thema/colors";
import { Size } from "../../../styles/thema/fonts";
import { Hoshi } from 'react-native-textinput-effects';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserInput: FC<Props> = ({ ...props }) => {
  const { label, placeholder, value, setValue } = props;
  return (
    <Fragment>
      < Hoshi
        onChangeText={(name) => setValue(name)}
        //値
        value={value}
        label={label}
        //先頭文字を大文字にしない
        autoCapitalize={'none'}
        //キーボードの設定
        returnKeyType="done"
        blurOnSubmit={true}
        //改行
        multiline={true}
        //編集を可能に
        editable={true}
        //アクティブな境界線およびラベルの色
        //どうしても赤線が出る。影響なし
        borderHeight={1}
        borderColor={utilityColor.border}
        inputPadding={24}
        inputStyle={styles.editInput}
        labelStyle={styles.labelItem}
      />
    </Fragment>
  );
};


const styles = StyleSheet.create({
  labelItem: {
    color: utilityColor.inputLabel,
    fontSize: Size.Small,
    fontWeight: "600",
  },
  editInput: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "600",
    lineHeight: Size.lineHeight,
    paddingLeft: 5,
    paddingRight: 15,
  },
});

export default UserInput;
