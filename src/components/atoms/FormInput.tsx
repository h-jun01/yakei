import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { utilityColor } from "../../styles/thema/colors";
import { styles } from "../../styles/auth/auth";

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

const FormInput: FC<Props> = ({ ...props }) => {
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

export default FormInput;
