import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import HeaderImage from "../../atoms/user/HeaderImage";
import UserImage from "../../atoms/user/UserImage";
import UserInput from "../../atoms/user/UserInput";
import UserSaveButton from "../../atoms/user/UserSaveButton";

type Props = {
  userName: string;
  userImage: string;
  userHeaderImage: string;
  userSelfIntroduction: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserSelfIntroduction: React.Dispatch<React.SetStateAction<string>>;
  saveData: () => Promise<void>;
  onAddImagePressed: () => Promise<void>;
  onAddHeaderImagePressed: () => Promise<void>;
};

const EditProfile: FC<Props> = ({ ...props }) => {
  const {
    userName,
    userImage,
    userHeaderImage,
    userSelfIntroduction,
    setUserName,
    setUserSelfIntroduction,
    saveData,
    onAddImagePressed,
    onAddHeaderImagePressed,
  } = props;

  return (
    <View style={{ flex: 1 }}>
      <View>
        {/* ヘッダー画像 */}
        <Text onPress={() => onAddHeaderImagePressed()}>
          <HeaderImage userHeaderImage={userHeaderImage} />
        </Text>
        {/* ユーザアイコン画像 */}
        <Text onPress={() => onAddImagePressed()}>
          <UserImage userImage={userImage} size={100} />
        </Text>
        {/* 入力フォーム */}
        <UserInput
          label="ユーザ名"
          placeholder="ユーザ名を入力"
          value={userName}
          setValue={setUserName}
        />
        <UserInput
          label="自己紹介"
          placeholder="自己紹介を入力"
          value={userSelfIntroduction}
          setValue={setUserSelfIntroduction}
        />
      </View>
      {/* 更新ボタン */}
      <UserSaveButton saveData={saveData} />
    </View>
  );
};

export default EditProfile;
