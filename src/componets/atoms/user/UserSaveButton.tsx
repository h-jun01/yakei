import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

type Props = {
  saveData: () => Promise<void>;
};

const UserSaveButton: FC<Props> = ({ saveData }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => saveData()}>
        <Text>プロフィールを更新する</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserSaveButton;
