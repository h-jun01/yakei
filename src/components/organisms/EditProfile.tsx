import React, { FC } from "react";
import { Platform, PlatformIOSStatic, StyleSheet } from "react-native";
import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { deviceHeight } from "../../utilities/dimensions";
import UserImage from "../atoms/UserImage";
import UserInput from "../atoms/UserInput";
import HeaderImage from "../atoms/HeaderImage";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  userName: string;
  userImage: string;
  userHeaderImage: string;
  userSelfIntroduction: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setUserSelfIntroduction: React.Dispatch<React.SetStateAction<string>>;
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
        <View style={styles.allWrap}>
          {/* 画像系 */}
          <View style={styles.userImgWrap}>
            {/* ヘッダー画像 */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onAddHeaderImagePressed()}
            >
              <HeaderImage userHeaderImage={userHeaderImage} />
              <Icon
                style={styles.headerIcon}
                name="camera"
                size={24}
                color={"#fff"}
              />
            </TouchableOpacity>
            {/* ユーザアイコン画像 */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.iconImg}
              onPress={() => onAddImagePressed()}
            >
              <UserImage
                userImage={userImage}
                size={platformIOS.isPad ? wp("16.7%") : wp("20.3%")}
              />
              <View style={styles.overlay}>
                <Icon name="camera" size={24} color={"#fff"} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrap}>
            {/* 入力フォーム */}
            <UserInput
              label="ユーザ名"
              placeholder="ユーザ名を入力"
              maxLength={6}
              value={userName}
              setValue={setUserName}
            />
            <View style={styles.margin} />
            <UserInput
              label="自己紹介"
              placeholder="自己紹介を入力"
              maxLength={40}
              value={userSelfIntroduction}
              setValue={setUserSelfIntroduction}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    flex: 1,
    width: wp("100%"),
    height: hp("100%"),
  },
  userImgWrap: {
    position: "relative",
  },
  iconImg: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    bottom: wp("18%"),
  },
  overlay: {
    width: platformIOS.isPad ? wp("16.7%") : wp("20.3%"),
    height: platformIOS.isPad ? wp("16.7%") : wp("20.3%"),
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 180,
    backgroundColor: utilityColor.strongOverlay,
    zIndex: 2,
  },
  inputWrap: {
    width: wp("95%"),
    alignSelf: "center",
    paddingTop: 10,
  },
  margin: {
    marginVertical: hp("1.5%"),
  },
  headerIcon: {
    position: "absolute",
    bottom: hp("2%"),
    right: wp("2%"),
  },
});

export default EditProfile;
