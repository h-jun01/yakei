import React, { FC, Fragment, useState, useEffect } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import { callingAlert } from "../../utilities/alert";
import { RootState } from "../../reducers/index";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  upDateUserName,
  upDateUserProfileImage,
  upDateUserProfileHeaderImage,
  upDateUserImgIndex,
  upDateUserHeaderImgIndex,
  upDateUserSelfIntroduction,
} from "../../actions/user";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import EditProfile from "../../components/organisms/EditProfile";
import Spinner from "react-native-loading-spinner-overlay";

type StorageImageData = {
  imgUrl: string;
  postIndex: string;
};

type Props = {
  navigation: any;
};

const ContainerEditProfile: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectHeaderImage = (state: RootState) =>
    state.userReducer.userHeaderImg;
  const selectImgIndex = (state: RootState) => state.userReducer.imgIndex;
  const selectHeaderImgIndex = (state: RootState) =>
    state.userReducer.headerImgIndex;
  const selectSelfIntroduction = (state: RootState) =>
    state.userReducer.selfIntroduction;
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const headerImage = useSelector(selectHeaderImage);
  const imgIndex = useSelector(selectImgIndex);
  const headerImgIndex = useSelector(selectHeaderImgIndex);
  const selfIntroduction = useSelector(selectSelfIntroduction);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>(name);
  const [userImage, setUserImage] = useState<string>(image);
  const [userHeaderImage, setUserHeaderImage] = useState<string>(headerImage);
  const [userSelfIntroduction, setUserSelfIntroduction] = useState<string>(
    selfIntroduction
  );
  const [isSelectImage, setIsSelectImage] = useState<boolean>(false);
  const [isSelectHeaderImage, setIsSelectHeaderImage] = useState<boolean>(
    false
  );
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [storageHeaderImageData, setStorageHeaderImageData] = useState<
    StorageImageData
  >({
    imgUrl: "",
    postIndex: "",
  });
  const [storageImageData, setStorageImageData] = useState<StorageImageData>({
    imgUrl: "",
    postIndex: "",
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => saveData()}>
          <Text style={styles.saveButton}>保存</Text>
        </TouchableOpacity>
      ),
    });
  });

  //リサイズしてアイコンをstorageImageDataに一時保存
  const onAddImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      Alert.alert(
        "",
        "端末の[設定]>[YAKEI]で、写真へのアクセスを許可してください。"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.3,
    });

    //リサイズ処理
    if (!result.cancelled) {
      const actions: any = [];
      actions.push({ resize: { width: 350 } });
      const manipulatorResult = await ImageManipulator.manipulateAsync(
        result.uri,
        actions,
        {
          compress: 0.8,
        }
      );
      //リサイズしたデータを保存
      setStorageImageData((prevState) => ({
        ...prevState,
        imgUrl: manipulatorResult.uri,
      }));
      setUserImage(manipulatorResult.uri);
      setIsSelectImage(true);
    }
  };

  //リサイズしてヘッダーをstorageHeaderImageDataに一時保存
  const onAddHeaderImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      Alert.alert(
        "",
        "端末の[設定]>[YAKEI]で、写真へのアクセスを許可してください。"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.3,
    });

    //リサイズ処理
    if (!result.cancelled) {
      const actions: any = [];
      actions.push({
        resize: { width: deviceWidth },
      });
      const manipulatorResult = await ImageManipulator.manipulateAsync(
        result.uri,
        actions,
        {
          compress: 0.8,
        }
      );

      //リサイズしたデータを保存
      setStorageHeaderImageData((prevState) => ({
        ...prevState,
        imgUrl: manipulatorResult.uri,
      }));
      setUserHeaderImage(manipulatorResult.uri);
      setIsSelectHeaderImage(true);
    }
  };

  //storageにアイコン画像をアップロード
  const uploadPostImage = async () => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const postIndex = Date.now().toString();
    const response = await fetch(storageImageData.imgUrl);
    const blob = await response.blob();
    const uploadRef = accountFireStore.uploadStorageImage(postIndex);

    await uploadRef.put(blob, metadata).catch(() => {
      callingAlert("画像の保存に失敗しました");
      return;
    });

    //前回のプロフィールアイコン画像を削除
    if (imgIndex) {
      await accountFireStore.deleteStorageImage(imgIndex);
    }

    //storageのダウンロードURLを保存
    await uploadRef
      .getDownloadURL()
      .then(async (imgUrl: string) => {
        setStorageImageData((prevState) => ({
          ...prevState,
          imgUrl,
          postIndex,
        }));
        //画像URLを保存
        await accountFireStore.updateImgIndex(postIndex);
        await accountFireStore.updateProfileImage(imgUrl);
        dispatch(upDateUserImgIndex(postIndex));
        dispatch(upDateUserProfileImage(imgUrl));
      })
      .catch(() => {
        callingAlert("失敗しました");
      });
  };

  //storageにヘッダー画像をアップロード
  const uploadPostHeaderImage = async () => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const postIndex = Date.now().toString();
    const response = await fetch(storageHeaderImageData.imgUrl);
    const blob = await response.blob();
    const uploadRef = accountFireStore.uploadStorageHeaderImage(postIndex);

    await uploadRef.put(blob, metadata).catch(() => {
      callingAlert("画像の保存に失敗しました");
      return;
    });

    //前回のヘッダー画像を削除
    if (headerImgIndex) {
      await accountFireStore.deleteStorageHeaderImage(headerImgIndex);
    }

    //storageのダウンロードURLを保存
    await uploadRef
      .getDownloadURL()
      .then(async (imgUrl) => {
        setStorageImageData((prevState) => ({
          ...prevState,
          imgUrl,
          postIndex,
        }));
        //画像URLを保存
        await accountFireStore.updateHeaderImgIndex(postIndex);
        await accountFireStore.updateProfileHeaderImage(imgUrl);
        dispatch(upDateUserHeaderImgIndex(postIndex));
        dispatch(upDateUserProfileHeaderImage(imgUrl));
      })
      .catch(() => {
        callingAlert("失敗しました");
      });
  };

  //保存処理
  const saveData = async () => {
    const REGEX_NAME = /^.{2,6}$/;
    setIsLoading(true);
    //ユーザ名を更新して保存
    if (!userName) {
      callingAlert("ユーザ名を入力してください");
      setIsLoading(false);
      return;
    } else if (!userName.match(REGEX_NAME)) {
      callingAlert("ユーザ名は2〜6文字以内で入力してください");
      setIsLoading(false);
      return;
    } else {
      dispatch(upDateUserName(userName));
      await accountFireStore.updateName(userName);
    }
    //自己紹介を保存して更新
    if (userSelfIntroduction.length >= 1) {
      dispatch(upDateUserSelfIntroduction(userSelfIntroduction));
      await accountFireStore.upDateSelfIntroduction(userSelfIntroduction);
    }
    //storageにアイコン画像を保存,firedtoreにアイコン画像URLを保存
    if (isSelectImage) {
      await uploadPostImage();
    }
    //storageにヘッダー画像を保存,firedtoreにヘッダー画像URLを保存
    if (isSelectHeaderImage) {
      await uploadPostHeaderImage();
    }
    setIsLoading(false);
    navigation.navigate("user");
  };

  return (
    <Fragment>
      <EditProfile
        userName={userName}
        userImage={userImage}
        userHeaderImage={userHeaderImage}
        userSelfIntroduction={userSelfIntroduction}
        setUserName={setUserName}
        setUserSelfIntroduction={setUserSelfIntroduction}
        onAddImagePressed={onAddImagePressed}
        onAddHeaderImagePressed={onAddHeaderImagePressed}
      />
      <Spinner
        visible={isloading}
        textContent="保存中..."
        textStyle={{ color: "#fff", fontSize: 13 }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Fragment>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  saveButton: {
    color: baseColor.accent,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.NormalL,
    fontWeight: "bold",
    paddingRight: wp("4%"),
  },
});

export default ContainerEditProfile;
