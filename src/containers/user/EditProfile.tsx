import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import { UserScreenNavigationProp } from "../../componets/user/User";
import { callingAlert } from "../../utilities/alert";
import { upDateUserName } from "../../actions/user";
import { RootState } from "../../reducers/index";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import EditProfile from "../../componets/user/EditProfile";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerEditProfile: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const selectName = (state: RootState) => state.userReducer.name;
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>(name);
  const [state, setState] = useState<any>({
    imgUrl: "",
    phrase: "",
    addedPost: [],
  });
  const onAddImagePressed = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
        // ImageManipulatorでリサイズ処理
        const actions: any = [];
        actions.push({ resize: { width: 350 } });
        const manipulatorResult = await ImageManipulator.manipulateAsync(
          result.uri,
          actions,
          {
            compress: 0.4,
          }
        );
        setState((prevState) => ({
          ...prevState,
          imgUrl: manipulatorResult.uri,
        }));
      }
    }
  };

  //保存
  const saveData = async () => {
    if (userName) {
      navigation.navigate("User");
      dispatch(upDateUserName(userName));
      await accountFireStore.updateName(userName);
    } else {
      callingAlert({
        alertTitle: "エラー",
        alertMessage: "ユーザ名を入力してください",
        alertClose: "OK",
        alertStyle: "default",
      });
    }
  };

  return (
    <EditProfile
      userName={userName}
      setUserName={setUserName}
      saveData={saveData}
    />
  );
};

export default ContainerEditProfile;
