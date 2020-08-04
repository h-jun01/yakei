import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../styles/auth";

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
      <Text style={styles.inputItemName}>{item}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#8C9197"
        {...signUpUserData}
      />
    </View>
  );
};

export default FormInput;
