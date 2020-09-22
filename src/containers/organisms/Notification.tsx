import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { Timestamp } from "@google-cloud/firestore";
import { NotificationScreenStackParamList } from "../../screens/NotificationScreen";
import { RootState } from "../../reducers/index";
import { setNotificationDataList } from "../../actions/notification";
import { db } from "../../firebase/firebase";
import { notificationFireStore } from "../../firebase/notificationFireStore";
import Notification from "../../components/organisms/Notification";

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationScreenStackParamList,
  "post"
>;

type NotificationItems = {
  opponent_uid: string;
  opponent_url: string;
  opponent_name: string;
  photo_url: string;
  uid: string;
  content: string;
  create_time: Timestamp;
};

type Props = {
  navigation: NotificationScreenNavigationProp;
};

const ContainerNotification: FC<Props> = ({ navigation }) => {
  const selectNotificationDataList = (state: RootState) =>
    state.notificationReducer.notificationDataList;
  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;

  const notificationDataList = useSelector(selectNotificationDataList);
  const uid = useSelector(selectUid);
  const bottomHeight = useSelector(selectBottomHeight);

  const dispatch = useDispatch();
  const [temporaryArray, setTemporaryArray] = useState(notificationDataList);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(uid)
      .collection("notification")
      .orderBy("create_time", "desc")
      .limit(20)
      .onSnapshot((snapShot) => {
        snapShot.docChanges().forEach((change) => {
          const product = change.doc.data({ serverTimestamps: "estimate" });
          const changeType = change.type;
          setTemporaryArray(temporaryArray.slice());

          switch (changeType) {
            case "added":
              temporaryArray.unshift(product as NotificationItems);
              break;
            case "modified":
              break;
            case "removed":
              // notificationFireStore.getUserNotification(uid).then((res) => {
              //   console.log("ok");
              //   dispatch(setNotificationDataList(res));
              //   setTemporaryArray(res);
              // });
              console.log(product);

              break;
            default:
              break;
          }
        });
        dispatch(setNotificationDataList(temporaryArray));
        setTemporaryArray(notificationDataList);
      });

    return () => unsubscribe();
  }, []);

  return (
    <Notification
      navigation={navigation}
      notificationDataList={notificationDataList}
      bottomHeight={bottomHeight}
    />
  );
};

export default ContainerNotification;
