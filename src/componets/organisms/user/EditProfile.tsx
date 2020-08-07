import React, { FC } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { accountFireStore } from "../../../firebase/accountFireStore";
import UserImage from "../../atoms/user/UserImage";
import UserInput from "../../atoms/user/UserInput";
import HeaderImage from "../../atoms/user/HeaderImage";
import UserSaveButton from "../../atoms/user/UserSaveButton";
import { deviceWidth } from "../../../utilities/dimensions";
import { styles } from "../../../styles/user/editProfile";


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
    <View>
      <View style={styles.editProWrap}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          behavior="position"
        >
          {/* ヘッダー画像 */}
          <Text onPress={() => onAddHeaderImagePressed()}>
            <HeaderImage userHeaderImage={userHeaderImage} />
          </Text>
          <View style={styles.userIconWrap}>
            {/* ユーザアイコン画像 */}
            <Text style={styles.iconImg} onPress={() => onAddImagePressed()}>
              <UserImage userImage={userImage} size={deviceWidth / 5} />
            </Text>
          </View>
          {/* 入力フォーム */}
          <UserInput
            label="ユーザ名"
            placeholder="ユーザ名を入力"
            value={userName}
            setValue={setUserName}
          />
          <View style={styles.margin}></View>
          <UserInput
            label="自己紹介"
            placeholder="自己紹介を入力"
            value={userSelfIntroduction}
            setValue={setUserSelfIntroduction}
          />

          {/* 更新ボタン */}
          <View style={styles.userButtonWrap}>
            <UserSaveButton saveData={saveData} />
          </View>
        </KeyboardAvoidingView>
      </View>
      {/* 更新ボタン
      <UserSaveButton saveData={saveData} />
      <Text onPress={() => accountFireStore.passwordResetEmail()}>
        メール送信テキスト
      </Text> */}
    </View>
  );
};

export default EditProfile;
