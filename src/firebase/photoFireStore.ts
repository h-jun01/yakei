import firebase from "firebase";
import { auth, db } from "./firebase";

type PhotoFireStore = {
  getPhotoList: (
    uid: string
  ) => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
};

const photo = db.collection("photos");

export const photoFireStore: PhotoFireStore = {
  //写真一覧を取得
  getPhotoList: (uid: string) => {
    return photo.doc(uid).get();
  },
};
