import React, { FC } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
  label: string;
  handleAuth: () => void;
};

const AuthButton: FC<Props> = ({ ...props }) => {
  const { label, handleAuth } = props;
  return (
    <TouchableOpacity
      style={styles.buttonBack}
      activeOpacity={0.8}
      onPress={handleAuth}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: hp("1.5%"),
    marginBottom: hp(".5%"),
  },
  buttonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AuthButton;
