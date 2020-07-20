import firebase from "firebase";
import { auth, db } from "./firebase";

type photoFireStore = {
  getUser: (
    uid: string
  ) => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
};

const photo = db.collection("photos");

export const photoFireStore = {
  //写真一覧を取得
  getPhotoList: (uid: string) => {
    return photo.doc(uid).get();
  },
};
