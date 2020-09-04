import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import { setNotificationDataList } from "../../actions/notification";
import Notification from "../../components/organisms/Notification";

type Props = {
  navigation: any;
};

const ContainerNotification: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  const selectNotificationDataList = (state: RootState) =>
    state.notificationReducer.notificationDataList;
  const notificationDataList = useSelector(selectNotificationDataList);

  const [notification, setNotification] = useState<
    firebase.firestore.DocumentData[]
  >(notificationDataList);

  useEffect(() => {
    setNotification(notificationDataList);
  }, [notificationDataList]);

  return <Notification navigation={navigation} notification={notification} />;
};

export default ContainerNotification;
