import firebase from "firebase";
import { db, FieldValue } from "./firebase";

type CommentFireStore = {
  getCommentDataList: (
    photo_id: string
  ) => Promise<firebase.firestore.DocumentData[]>;
  postedComment: (
    photo_id: string,
    uid: string,
    message: string
    // create_time: string
  ) => Promise<void>;
};

const comment = db.collection("comments");

export const commentFireStore: CommentFireStore = {
  // コメント取得
  getCommentDataList: async (photo_id: string) => {
    const commentDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await comment
      .where("photo_id", "==", photo_id)
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
    message: string
    // create_time: string
  ) => {
    await comment.add({
      photo_id,
      uid,
      message,
      create_time: FieldValue.serverTimestamp(),
    });
  },
};
