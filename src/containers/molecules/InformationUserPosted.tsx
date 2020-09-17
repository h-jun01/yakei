import React, { FC, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionSheet } from "native-base";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { callingDeleteAlert } from "../../utilities/alert";
import { setPhotoListData } from "../../actions/photo";
import { setAllPhotoListData } from "../../actions/allPhoto";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";
import RBSheet from "react-native-raw-bottom-sheet";

type Props = {
  navigation: any;
  uid: string;
  photo_id: string;
  photogenic_subject: string;
  img_index: string;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, photo_id, photogenic_subject, navigation, img_index } = props;

  const selectMyuid = (state: RootState) => state.userReducer.uid;
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectMyPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;

  const myUid = useSelector(selectMyuid);
  const allPhotoDataList = useSelector(selectAllPhotoDataList);
  const myPhotoDataList = useSelector(selectMyPhotoDataList);

  const [postUserName, setPostUserName] = useState<string>("");
  const [postUserImage, setPostUserImage] = useState<string>(
    "https://example.com"
  );

  const refRBSheet = useRef<RBSheet>(null);
  const dispatch = useDispatch();

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

  const dispatchPhotoData = (): void => {
    const newAllPhotos = allPhotoDataList.slice();
    const filterAllPhoto = newAllPhotos.filter(
      (value) => value.photo_id !== photo_id
    );
    const newMyPhotos = myPhotoDataList.slice();
    const filterMyPhoto = newMyPhotos.filter(
      (value) => value.photo_id !== photo_id
    );
    dispatch(setAllPhotoListData(filterAllPhoto));
    dispatch(setPhotoListData(filterMyPhoto));
  };

  const deletingPosts = async () => {
    await photoFireStore
      .deletingPostedPhoto(photo_id)
      .then(async () => {
        dispatchPhotoData();
        navigation.goBack();
      })
      .catch((e) => {
        console.log(e);
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
