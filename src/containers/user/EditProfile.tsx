import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import { UserScreenNavigationProp } from "../../componets/user/User";
import { callingAlert } from "../../utilities/alert";
import { RootState } from "../../reducers/index";
import {
  upDateUserName,
  upDateUserProfileImage,
  upDateUserImgIndex,
} from "../../actions/user";
import EditProfile from "../../componets/user/EditProfile";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

type StorageImageData = {
  imgUrl: string;
  postIndex: string;
};

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerEditProfile: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectImgIndex = (state: RootState) => state.userReducer.imgIndex;
  const imgIndex = useSelector(selectImgIndex);
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>(name);
  const [userImage, setUserImage] = useState<string>(image);
  const [storageImageData, setStorageImageData] = useState<StorageImageData>({
    imgUrl: "",
    postIndex: "",
  });

  //リサイズしてstorageImageDataに一時保存
  const onAddImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      //リサイズ処理
      if (!result.cancelled) {
        const actions: any = [];
        actions.push({ resize: { width: 350 } });
        const manipulatorResult = await ImageManipulator.manipulateAsync(
          result.uri,
          actions,
          {
            compress: 0.4,
          }
        );
        //リサイズしたデータを保存
        setStorageImageData((prevState) => ({
          ...prevState,
          imgUrl: manipulatorResult.uri,
        }));
        setUserImage(manipulatorResult.uri);
      }
    }
  };

  //storageに画像をアップロード
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

    //前回のプロフィール画像を削除
    if (imgIndex) {
      await accountFireStore.deleteStorageImage(imgIndex);
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
        //img_indexを保存
        await accountFireStore.updateImgIndex(postIndex);
        dispatch(upDateUserImgIndex(postIndex));
      })
      .catch(() => {
        callingAlert("失敗しました");
      });
  };

  //保存処理
  const saveData = async () => {
    //ユーザ名を更新して保存
    if (userName) {
      dispatch(upDateUserName(userName));
      await accountFireStore.updateName(userName);
    } else {
      callingAlert("ユーザ名を入力してください");
      return;
    }
    //storageに画像を保存,firedtoreに画像URLを保存
    if (storageImageData.imgUrl) {
      dispatch(upDateUserProfileImage(storageImageData.imgUrl));
      await uploadPostImage();
      await accountFireStore.updateProfileImage(storageImageData.imgUrl);
    }
    navigation.navigate("User");
  };

  return (
    <EditProfile
      userName={userName}
      userImage={userImage}
      setUserName={setUserName}
      saveData={saveData}
      onAddImagePressed={onAddImagePressed}
    />
  );
};

export default ContainerEditProfile;
