import React, { FC, Fragment, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionSheet } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { callingDeleteAlert } from "../../utilities/alert";
import { setAllPhotoListData } from "../../actions/allPhoto";
import Spinner from "react-native-loading-spinner-overlay";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";
import RBSheet from "react-native-raw-bottom-sheet";

type PostScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList
>;

type Props = {
  navigation: PostScreenNavigationProp;
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

  const myUid = useSelector(selectMyuid);
  const allPhotoDataList = useSelector(selectAllPhotoDataList);

  const [isloading, setIsLoading] = useState<boolean>(false);
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
        setPostUserName("");
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
    dispatch(setAllPhotoListData(filterAllPhoto));
  };

  const deletingPosts = async () => {
    setIsLoading(true);
    await photoFireStore
      .removePostPhotoWithStorage(img_index, myUid)
      .catch((e) => {
        console.log(e);
      });
    await photoFireStore
      .deletingPostedPhoto(photo_id)
      .then(async () => {
        dispatchPhotoData();
        navigation.goBack();
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
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
    <Fragment>
      <InformationUserPosted
        photo_id={photo_id}
        postUserName={postUserName}
        postUserImage={postUserImage}
        photogenic_subject={photogenic_subject}
        refRBSheet={refRBSheet}
        transitionToAnotherUser={transitionToAnotherUser}
        _onOpenActionSheet={_onOpenActionSheet}
      />
      <Spinner
        visible={isloading}
        textContent="削除中..."
        textStyle={{ color: "#fff", fontSize: 13 }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Fragment>
  );
};

export default InformationUserPostedContainer;
