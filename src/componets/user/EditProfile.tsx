import React, { FC } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";

type Props = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  saveData: () => Promise<void>;
};

const EditProfile: FC<Props> = ({ ...props }) => {
  const { userName, setUserName, saveData } = props;
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>ユーザ名</Text>
        <TextInput
          value={userName}
          placeholder="ユーザ名を入力"
          placeholderTextColor="#808080"
          onChangeText={(name) => setUserName(name)}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => saveData()}>
        <Text>保存</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default EditProfile;
