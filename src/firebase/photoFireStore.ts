import firebase from "firebase";
import { db, FieldValue } from "./firebase";

type CommentDataList = {
  uid: string;
  message: string;
  createTime: string;
};

type PhotoFireStore = {
  getPhotoList: (uid: string) => Promise<firebase.firestore.DocumentData[]>;
  getAllPhotoList: () => Promise<firebase.firestore.DocumentData[]>;
  getCommentList: (photo_id: string) => Promise<CommentDataList[]>;
  upDateCommentList: (
    photo_id: string,
    uid: string,
    message: string,
    createTime: string
  ) => Promise<void>;
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
  getAllPhotoList: async () => {
    const allPhotoLis: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo.get();
    querySnapshot.forEach((doc) => {
      allPhotoLis.push(doc.data());
    });
    return allPhotoLis;
  },
  //コメントを取得
  getCommentList: async (photo_id: string) => {
    return await photo
      .doc(photo_id)
      .get()
      .then(async (res) => {
        return await res.data()?.comment_list;
      });
  },
  //コメントを投稿
  upDateCommentList: async (
    photo_id: string,
    uid: string,
    message: string,
    createTime: string
  ) => {
    await photo.doc(photo_id).update({
      comment_list: FieldValue.arrayUnion({
        uid,
        message,
        createTime,
      }),
    });
  },
};
