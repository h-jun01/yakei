import firebase from "firebase";
import { db, FieldValue } from "./firebase";

type ReportFireStore = {
  addReport: (uid: string, photo_id: string, entry: string) => Promise<void>;
};

const report = db.collection("reports");

export const reportFireStore: ReportFireStore = {
  // 報告内容を格納
  addReport: async (uid, photo_id, entry) => {
    await report
      .add({
        uid,
        photo_id,
        entry,
        created_at: FieldValue.serverTimestamp(),
      })
      .catch((e) => {
        alert(e);
      });
  },
};
