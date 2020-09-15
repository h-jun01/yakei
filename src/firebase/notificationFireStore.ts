import firebase from "firebase";
import { auth, db, FieldValue } from "./firebase";
import { Timestamp } from "@google-cloud/firestore";

type NotificationItems = {
  opponent_uid: string;
  opponent_url: string;
  opponent_name: string;
  photo_url: string;
  uid: string;
  content: string;
  create_time: Timestamp;
};

type NotificationFireStore = {
  getUserNotification: (
    uid: string
  ) => Promise<firebase.firestore.DocumentData[]>;
  notificationOpponentFavorite: (
    notificationItems: NotificationItems
  ) => Promise<void>;
  //   getNotificationPhotoURL;
};

const user = db.collection("users");

export const notificationFireStore: NotificationFireStore = {
  // 自分の通知を取得
  getUserNotification: async (uid: string) => {
    const notificationDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await user
      .doc(uid)
      .collection("notification")
      .orderBy("create_time", "desc")
      .limit(20)
      .get();
    querySnapshot.forEach((doc) => {
      notificationDataList.push(doc.data());
    });

    return notificationDataList;
  },
  // お気に入り時の通知を更新
  notificationOpponentFavorite: async ({ ...notificationItems }) => {
    await user
      .doc(notificationItems.uid)
      .collection("notification")
      .add({ ...notificationItems });
  },
  //   getNotificationPhotoURL: async (uid, url) => {
  //     return await user
  //       .doc(uid)
  //       .collection("notification")
  //       .where("photo_url", "==", url)
  //       .get()
  //       .then(async (res) => {
  //         return (await res.docs[0].data().photo_url) === url ? true : false;
  //       });
  //   },
};
