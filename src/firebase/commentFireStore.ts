import firebase from "firebase";
import { db, FieldValue } from "./firebase";

type CommentFireStore = {
  getCommentDataList: (
    photo_id: string
  ) => Promise<firebase.firestore.DocumentData[]>;
  postedComment: (
    photo_id: string,
    uid: string,
    message: string,
    name: string,
    imageUrl: string
  ) => Promise<void>;
};

const photo = db.collection("photos");

export const commentFireStore: CommentFireStore = {
  // コメント取得
  getCommentDataList: async (photo_id: string) => {
    const commentDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo
      .doc(photo_id)
      .collection("comment")
      .orderBy("create_time", "desc")
      .get();
    querySnapshot.forEach((doc) => {
      commentDataList.push(doc.data());
    });
    return commentDataList;
  },
  //コメントを投稿
  postedComment: async (
    photo_id: string,
    uid: string,
    message: string,
    name: string,
    imageUrl: string
  ) => {
    await photo.doc(photo_id).collection("comment").add({
      photo_id,
      uid,
      message,
      name,
      imageUrl,
      create_time: FieldValue.serverTimestamp(),
    });
  },
};
