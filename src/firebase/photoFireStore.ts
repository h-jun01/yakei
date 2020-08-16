import firebase from "firebase";
import { auth, db } from "./firebase";

type PhotoFireStore = {
  getPhotoList: (uid: string) => Promise<firebase.firestore.DocumentData[]>;
  getAllPhotoList: () => Promise<firebase.firestore.DocumentData[]>;
  getPostDocument: (
    photo_id: string
  ) => Promise<void | firebase.firestore.DocumentSnapshot<
    firebase.firestore.DocumentData
  >>;
};

const photo = db.collection("photos");
const user = db.collection("users");

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
  getAllPhotoList: async () => {
    const allPhotoLis: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo.get();
    querySnapshot.forEach((doc) => {
      allPhotoLis.push(doc.data());
    });
    return allPhotoLis;
  },

  //uidを取得
  getPostDocument: async (photo_id: string) => {
    return await photo
      .doc(photo_id)
      .get()
      .then(async (res) => {
        return await res.data()?.uid;
      });
  },
};
