import React, { FC } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { Avatar } from "react-native-elements";

export type StorageImageData = {
  imgUrl: string;
  postIndex: string;
};

type Props = {
  userName: string;
  userImage: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  saveData: () => Promise<void>;
  onAddImagePressed: () => Promise<void>;
};

const EditProfile: FC<Props> = ({ ...props }) => {
  const {
    userName,
    userImage,
    setUserName,
    saveData,
    onAddImagePressed,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Avatar
          size={100}
          activeOpacity={0.7}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          source={{
            uri: userImage,
          }}
          onPress={() => onAddImagePressed()}
        />
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
