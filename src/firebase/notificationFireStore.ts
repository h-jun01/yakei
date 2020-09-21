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
  getUserNotification: (uid: string) => Promise<NotificationItems[]>;
  notificationOpponentFavorite: (
    notificationItems: NotificationItems
  ) => Promise<void>;
  notificationAlreadyExistsDecision: (
    uid: string,
    url: string,
    name: string
  ) => Promise<boolean>;
};

const user = db.collection("users");

export const notificationFireStore: NotificationFireStore = {
  // 自分の通知を取得
  getUserNotification: async (uid: string) => {
    const notificationDataList: NotificationItems[] = [];
    const querySnapshot = await user
      .doc(uid)
      .collection("notification")
      .orderBy("create_time", "desc")
      .limit(20)
      .get();
    querySnapshot.forEach((doc) => {
      notificationDataList.push(doc.data() as NotificationItems);
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
  // 通知済みか存在判定
  notificationAlreadyExistsDecision: async (
    uid: string,
    url: string,
    name: string
  ) => {
    const notificationDataList: NotificationItems[] = [];
    const querySnapshot = await user.doc(uid).collection("notification").get();
    querySnapshot.forEach((doc) => {
      notificationDataList.push(doc.data() as NotificationItems);
    });

    return notificationDataList.some(
      (res) => res.photo_url === url && res.opponent_name === name
    );
  },
};
