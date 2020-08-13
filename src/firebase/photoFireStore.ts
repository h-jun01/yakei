import firebase from "firebase";
import { auth, db } from "./firebase";

type PhotoFireStore = {
  getPhotoList: (uid: string) => Promise<firebase.firestore.DocumentData[]>;
  getAllPhotoList: () => Promise<
    firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  >;
};

const photo = db.collection("photos");

export const photoFireStore: PhotoFireStore = {
  //自分の投稿した写真を取得
  getPhotoList: async (uid: string) => {
    const photoDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo.where("uid", "==", uid).get();
    querySnapshot.forEach((doc) => {
      photoDataList.push(doc.data());
    });
    return photoDataList;
  },

  // 全てのユーザーの写真取得
  getAllPhotoList: () => {
    return photo.get();
  },
};
