import React, { FC, Fragment } from "react";
import { Text, TextInput } from "react-native";

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
      <Text>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        onChangeText={(name) => setValue(name)}
      />
    </Fragment>
  );
};

export default UserInput;
