import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/index";
import { notificationFireStore } from "../../firebase/notificationFireStore";
import { setNotificationDataList } from "../../actions/notification";
import Notification from "../../components/organisms/Notification";

type Props = {
  navigation: any;
};

//主に処理に関する記述はこのファイル
const ContainerNotification: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectNotificationDataList = (state: RootState) =>
    state.notificationReducer.notificationDataList;

  const uid = useSelector(selectUid);
  const notificationDataList = useSelector(selectNotificationDataList);

  const [notification, setNotification] = useState<
    firebase.firestore.DocumentData[]
  >(notificationDataList);
  const dispatch = useDispatch();

  return <Notification navigation={navigation} notification={notification} />;
};

export default ContainerNotification;
