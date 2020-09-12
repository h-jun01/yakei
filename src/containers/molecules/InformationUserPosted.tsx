import React, { FC, useState, useEffect, useRef } from "react";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import { ActionSheet } from "native-base";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {
  navigation: any;
  uid: string;
  photogenic_subject: string;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, photogenic_subject, navigation } = props;

  const selectMyuid = (state: RootState) => state.userReducer.uid;

  const myUid = useSelector(selectMyuid);
  const refRBSheet = useRef<RBSheet>(null);

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
    const BUTTONS = [uid === myUid ? "削除" : "報告する", "キャンセル"];
    const DESTRUCTIVE_INDEX = 0;
    const CANCEL_INDEX = 1;

    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          test();
        }
      }
    );
  };

  const test = () => {
    refRBSheet.current!.open();
  };

  return (
    <InformationUserPosted
      postUserName={postUserName}
      postUserImage={postUserImage}
      photogenic_subject={photogenic_subject}
      refRBSheet={refRBSheet}
      transitionToAnotherUser={transitionToAnotherUser}
      _onOpenActionSheet={_onOpenActionSheet}
    />
  );
};

export default InformationUserPostedContainer;
