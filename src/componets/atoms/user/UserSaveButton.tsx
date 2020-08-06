import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../../styles/thema/colors";
import { Size } from "../../../styles/thema/fonts";

type Props = {
  saveData: () => Promise<void>;
};

const UserSaveButton: FC<Props> = ({ saveData }) => {
  return (
    <View style={styles.userButtonWrap}>
      <TouchableWithoutFeedback onPress={() => saveData()}>
        <Text style={styles.userButtonText}>プロフィールを更新する</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  userButtonWrap: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
  },
  userButtonText: {
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default UserSaveButton;
