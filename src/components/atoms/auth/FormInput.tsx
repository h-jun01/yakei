import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import {  utilityColor } from "../../../styles/thema/colors";
import { styles } from "../../../styles/auth/auth";

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

type Props = {
  item: string;
  placeholder: string;
  secureTextEntry: boolean;
  signUpUserData: UseInput;
};

const FormInput: FC<Props> = ({ ...props }) => {
  const { item, placeholder, secureTextEntry, signUpUserData } = props;
  return (
    <View>
      <Text style={styles.authInputItemName}>{item}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        editable={true}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={utilityColor.placeholderText}
        {...signUpUserData}
        style={styles.authInput}
      />
    </View>
  );
};


export default FormInput;
