import React, { FC, useState, useEffect } from "react";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import { connectActionSheet } from "@expo/react-native-action-sheet";
import { useActionSheet } from "@expo/react-native-action-sheet";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";

type Props = {
  navigation: any;
  uid: string;
  photogenic_subject: string;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, photogenic_subject, navigation } = props;
  const { showActionSheetWithOptions } = useActionSheet();

  const selectMyuid = (state: RootState) => state.userReducer.uid;
  const myUid = useSelector(selectMyuid);

  const [postUserName, setPostUserName] = useState<string>("");
  const [postUserImage, setPostUserImage] = useState<string>(
    "https://example.com"
  );

  //投稿したユーザ名の取得
  useEffect(() => {
    accountFireStore
      .getUserName(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserName(res);
      })
      .catch(() => {
        setPostUserName("Anonymous");
      });
  }, []);

  //投稿したユーザのアイコン画像を取得
  useEffect(() => {
    accountFireStore
      .getUserImage(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserImage(res);
      })
      .catch(() => {
        setPostUserImage("https://example.com");
      });
  }, []);

  const transitionToAnotherUser = () => {
    if (uid !== myUid)
      navigation.navigate("otherUser", {
        uid,
        name: postUserName,
      });
  };

  const _onOpenActionSheet = () => {
    const options = [uid === myUid ? "削除" : "報告する", "キャンセル"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        // Do something here depending on the button index selected
      }
    );
  };

  return (
    <InformationUserPosted
      postUserName={postUserName}
      postUserImage={postUserImage}
      photogenic_subject={photogenic_subject}
      transitionToAnotherUser={transitionToAnotherUser}
      _onOpenActionSheet={_onOpenActionSheet}
    />
  );
};

const ConnectedInformationUserPostedContainer = connectActionSheet(
  InformationUserPostedContainer
);

export default ConnectedInformationUserPostedContainer;
