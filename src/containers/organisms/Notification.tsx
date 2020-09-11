import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/index";
import { setNotificationDataList } from "../../actions/notification";
import { db } from "../../firebase/firebase";
import Notification from "../../components/organisms/Notification";

type Props = {
  navigation: any;
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
      bottomHeight={bottomHeight}
    />
  );
};

export default ContainerNotification;
