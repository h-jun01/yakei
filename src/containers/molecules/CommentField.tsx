import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { useDisplayTime } from "../../utilities/hooks/date";
import { RootState } from "../../reducers/index";
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
  name: string;
  imageUrl: string;
  create_time: Timestamp;
  navigation: PostScreenNavigationProp;
};

const CommentFieldContainer: FC<Props> = ({ ...props }) => {
  const { uid, message, name, imageUrl, create_time, navigation } = props;

  const selectMyuid = (state: RootState) => state.userReducer.uid;
  const myUid = useSelector(selectMyuid);

  const date = useDisplayTime(create_time.toMillis());

  // 他ユーザページへ遷移
  const transitionToAnotherUser = (): void => {
    if (uid !== myUid)
      navigation.navigate("otherUser", {
        uid,
        name,
      });
  };

  return (
    <CommentField
      postUserName={name}
      postUserImage={imageUrl}
      message={message}
      date={date}
      transitionToAnotherUser={transitionToAnotherUser}
    />
  );
};

export default CommentFieldContainer;
