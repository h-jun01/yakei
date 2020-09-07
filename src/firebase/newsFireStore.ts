import firebase from "firebase";
import { db } from "./firebase";

type NewsFireStore = {
  getNewsDataList: () => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
};

const notice = db.collection("news");

export const newsFireStore: NewsFireStore = {
  //お知らせの取得
  getNewsDataList: () => {
    return notice.doc("newsDocument").get();
  },
};
