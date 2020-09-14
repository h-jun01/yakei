import React, { FC, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ActionSheet } from "native-base";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { callingDeleteAlert } from "../../utilities/alert";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {
  navigation: any;
  uid: string;
  photo_id: string;
  photogenic_subject: string;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, photo_id, photogenic_subject, navigation } = props;

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

  // 他ユーザページへ遷移
  const transitionToAnotherUser = (): void => {
    if (uid !== myUid)
      navigation.navigate("otherUser", {
        uid,
        name: postUserName,
      });
  };

  const deletingPosts = async () => {
    await photoFireStore.deletingPostedPhoto(photo_id).then(async () => {
      const url =
        "https://asia-northeast1-hal-yakei.cloudfunctions.net/deleteAtPath";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          collection: "photos",
          doc: photo_id,
          subCollection: "comment",
        }),
      })
        .then(() => {
          console.log("success");
        })
        .catch(() => {
          console.log("reject");
        });
    });
  };

  const _handleOnPress = (): void => {
    uid === myUid
      ? callingDeleteAlert(deletingPosts)
      : refRBSheet.current!.open();
  };

  const _onOpenActionSheet = (): void => {
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
          _handleOnPress();
        }
      }
    );
  };

  return (
    <InformationUserPosted
      photo_id={photo_id}
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
