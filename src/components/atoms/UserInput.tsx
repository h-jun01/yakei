import React, { FC, Fragment } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { Hoshi } from "react-native-textinput-effects";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  inputLength: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserInput: FC<Props> = ({ ...props }) => {
  const { label, placeholder, value, setValue, inputLength } = props;
  return (
    <Fragment>
      {/* インプットの説明 */}
      <Text style={styles.labelItem}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        editable={true}
        placeholderTextColor={utilityColor.placeholderText}
        onChangeText={(name) => setValue(name)}
        style={styles.editInput}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  //fontWeightを変数指定すると赤線が出る。影響はなし
  labelItem: {
    color: baseColor.text,
    fontSize: Size.Normal,
    fontWeight: "600",
    marginBottom: wp("1.5%"),
    paddingLeft: wp("3%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
  editInput: {
    color: utilityColor.editBox,
    fontSize: Size.Large,
    fontWeight: "600",
    lineHeight: Size.lineHeight,
    paddingBottom: wp("3%"),
    paddingLeft: wp("6%"),
    paddingRight: wp("5%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
});

export default UserInput;
