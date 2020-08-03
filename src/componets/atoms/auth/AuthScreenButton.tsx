import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "../../../styles/auth";

type Props = {
  label: string;
  authFunction: () => void;
};

const AuthScreenButton: FC<Props> = ({ ...props }) => {
  const { label, authFunction } = props;
  return (
    <View style={styles.buttonBack}>
      <TouchableWithoutFeedback onPress={authFunction}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AuthScreenButton;
