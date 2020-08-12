import firebase from "firebase";
import { db } from "./firebase";

type NoticeFireStore = {
  getNoticeList: () => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
};

const notice = db.collection("notice");

export const noticeFireStore: NoticeFireStore = {
  //お知らせの取得
  getNoticeList: () => {
    return notice.doc("noticeDocument").get();
  },
};
