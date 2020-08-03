import React, { FC } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "../../../styles/auth";

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  label: string;
  onPressFunction: () => void;
};

const AuthButton: FC<Props> = ({ ...props }) => {
  const { label, onPressFunction } = props;
  return (
    <TouchableWithoutFeedback onPress={() => onPressFunction()}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AuthButton;
