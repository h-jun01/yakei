import React, { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { utilityColor } from "../../styles/thema/colors";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

type Props = {
  item: string;
  placeholder: string;
  maxLength: number;
  secureTextEntry: boolean;
  signUpUserData: UseInput;
};

const InputForm: FC<Props> = ({ ...props }) => {
  const {
    item,
    placeholder,
    maxLength,
    secureTextEntry,
    signUpUserData,
  } = props;

  return (
    <View>
      <Text style={styles.authInputItemName}>{item}</Text>
      <TextInput
        style={styles.authInput}
        placeholder={placeholder}
        maxLength={maxLength}
        autoCapitalize={"none"}
        keyboardType="default"
        returnKeyType="done"
        blurOnSubmit={true}
        editable={true}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={utilityColor.placeholderText}
        {...signUpUserData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  authInputItemName: {
    color: baseColor.text,
    fontSize: Size.Small,
    fontWeight: "600",
  },
  authInput: {
    marginBottom: hp("2.3%"),
    padding: wp("1.5%"),
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: utilityColor.border,
    fontSize: Size.Large,
    color: baseColor.text,
  },
});

export default InputForm;
