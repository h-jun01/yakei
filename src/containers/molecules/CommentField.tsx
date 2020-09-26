import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { useDisplayTime } from "../../utilities/hooks/date";
import { RootState } from "../../reducers/index";
import { accountFireStore } from "../../firebase/accountFireStore";
import CommentField from "../../components/molecules/CommentField";

type PostScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "otherUser"
>;

type Props = {
  uid: string;
  message: string;
  create_time: Timestamp;
  navigation: PostScreenNavigationProp;
};

const CommentFieldContainer: FC<Props> = ({ ...props }) => {
  const { uid, message, create_time, navigation } = props;

  const selectMyuid = (state: RootState) => state.userReducer.uid;
  const myUid = useSelector(selectMyuid);

  const [postUserName, setPostUserName] = useState<string>("");
  const [postUserImage, setPostUserImage] = useState<string>(
    "https://example.com"
  );

  const date = useDisplayTime(create_time.toMillis());

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

    return setPostUserName("");
  }, []);

  //コメントを投稿したユーザのアイコン画像を取得
  useEffect(() => {
    accountFireStore
      .getUserImage(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserImage(res);
      })
      .catch(() => {
        setPostUserImage("https://example.com");
      });

    return setPostUserImage("https://example.com");
  }, []);

  // 他ユーザページへ遷移
  const transitionToAnotherUser = (): void => {
    if (uid !== myUid)
      navigation.navigate("otherUser", {
        uid,
        name: postUserName,
      });
  };

  return (
    <CommentField
      postUserName={postUserName}
      postUserImage={postUserImage}
      message={message}
      date={date}
      transitionToAnotherUser={transitionToAnotherUser}
    />
  );
};

export default CommentFieldContainer;
