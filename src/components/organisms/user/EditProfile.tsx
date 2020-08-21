import React, { FC } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import UserImage from "../../atoms/user/UserImage";
import UserInput from "../../atoms/user/UserInput";
import HeaderImage from "../../atoms/user/HeaderImage";
import UserSaveButton from "../../atoms/user/UserSaveButton";
import Icon from 'react-native-vector-icons/FontAwesome';
import { deviceWidth, deviceHeight } from "../../../utilities/dimensions";
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
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={deviceHeight / 3 + 24}
      >
        <View style={styles.editProWrap}>
          {/* 画像系 */}
          <View style={styles.userImgWrap}>
            {/* ヘッダー画像 */}
            <Text onPress={() => onAddHeaderImagePressed()}>
              <HeaderImage userHeaderImage={userHeaderImage} />
            </Text>
            <Icon style={styles.headerIcon} name="camera" size={24} color={"#fff"} />
            {/* ユーザアイコン画像 */}
            <Text style={styles.iconImg} onPress={() => onAddImagePressed()}>
              <UserImage userImage={userImage} size={deviceWidth / 5} />
            </Text>
            <View style={styles.overlay} >
              <Icon name="camera" size={24} color={"#fff"} />
            </View>
          </View>

            <View style={styles.inputWrap}>
              {/* 入力フォーム */}
              <UserInput
                label="ユーザ名"
                placeholder="ユーザ名を入力"
                value={userName}
                setValue={setUserName}
              />
              <View style={styles.margin} />
              <UserInput
                label="自己紹介"
                placeholder="自己紹介を入力"
                value={userSelfIntroduction}
                setValue={setUserSelfIntroduction}
              />
            </View>

            {/* 更新ボタン */}
          <View style={styles.userButton}>
            <UserSaveButton saveData={saveData} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfile;
