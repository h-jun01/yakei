import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth/auth";

type Props = {
  label: string;
  authFunction: () => void;
};

const AuthScreenButton: FC<Props> = ({ ...props }) => {
  const { label, authFunction } = props;
  return (
    <TouchableOpacity
      style={styles.buttonBack}
      activeOpacity={0.8}
      onPress={authFunction}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AuthScreenButton;
