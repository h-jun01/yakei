import firebase from "firebase";
import { db, FieldValue } from "./firebase";

const comment = db.collection("comments");

export const commentFireStore = {
  // コメント取得
  getCommentDataList: async (photo_id: string) => {
    const commentDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await comment.where("photo_id", "==", photo_id).get();
    querySnapshot.forEach((doc) => {
      commentDataList.push(doc.data());
    });
    return commentDataList;
  },
};
