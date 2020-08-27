import React, { FC } from "react";
import { Text, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/auth/auth";
import { baseColor } from "../../../styles/thema/colors";

type Props = {
  label: string;
  authFunction: () => void;
};

const AuthScreenButton: FC<Props> = ({ ...props }) => {
  const { label, authFunction } = props;
  return (
    <TouchableHighlight
      style={styles.buttonBack}
      underlayColor={baseColor.accent}
      onPress={authFunction}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableHighlight>
  );
};

export default AuthScreenButton;
