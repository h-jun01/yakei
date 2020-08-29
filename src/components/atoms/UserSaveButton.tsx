import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";

type Props = {
  saveData: () => Promise<void>;
};

const UserSaveButton: FC<Props> = ({ saveData }) => {
  return (
    <TouchableWithoutFeedback onPress={() => saveData()}>
      <Text style={styles.userButtonText}>保存</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  userButtonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default UserSaveButton;
