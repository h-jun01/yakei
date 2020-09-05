import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/index";
import { notificationFireStore } from "../../firebase/notificationFireStore";
import { setNotificationDataList } from "../../actions/notification";
import { auth, db } from "../../firebase/firebase";
import Notification from "../../components/organisms/Notification";

type Props = {
  navigation: any;
};

const ContainerNotification: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  const selectNotificationDataList = (state: RootState) =>
    state.notificationReducer.notificationDataList;
  const selectUid = (state: RootState) => state.userReducer.uid;

  const notificationDataList = useSelector(selectNotificationDataList);
  const uid = useSelector(selectUid);

  const dispatch = useDispatch();

  const [temporaryArray, setTemporaryArray] = React.useState(
    notificationDataList
  );

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
              temporaryArray.unshift(product);
              break;
            case "modified":
              break;
            case "removed":
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
    />
  );
};

export default ContainerNotification;
