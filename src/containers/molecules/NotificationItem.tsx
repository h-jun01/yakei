import React, { FC, useState, useEffect } from "react";
import { RootState } from "../../reducers/index";
import { setNotificationDataList } from "../../actions/notification";
import { db } from "../../firebase/firebase";
import NotificationItem from "../../components/molecules/NotificationItem";

type Props = {
  navigation: any;
  item: firebase.firestore.DocumentData;
};
const NotificationItemContainer: FC<Props> = ({ navigation, item }) => {
  const [data, setData] = useState<firebase.firestore.DocumentData>();
  useEffect(() => {
    db.collection("photos")
      .where("url", "==", item.photo_url)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 1) {
          console.warn("一つのURLから複数の投稿が検出されました");
        }
        querySnapshot.forEach((doc) => {
          setData(doc.data());
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return <NotificationItem navigation={navigation} item={item} data={data} />;
};

export default NotificationItemContainer;
