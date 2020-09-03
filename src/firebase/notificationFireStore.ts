import firebase from "firebase";
import { auth, db, FieldValue } from "./firebase";

type NotificationFireStore = {
  getUserNotification: (
    uid: string
  ) => Promise<firebase.firestore.DocumentData[]>;
};

const notification = db.collection("notifications");

export const notificationFireStore: NotificationFireStore = {
  // 自分の通知を取得
  getUserNotification: async (uid: string) => {
    const notificationDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await notification.where("uid", "==", uid).get();
    querySnapshot.forEach((doc) => {
      notificationDataList.push(doc.data());
    });

    return notificationDataList;
  },
};
