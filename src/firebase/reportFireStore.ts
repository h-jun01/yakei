import firebase from "firebase";
import { db, FieldValue } from "./firebase";

type ReportFireStore = {
  addReport: (uid: string, photo_id: string, entry: string) => Promise<void>;
};

const report = db.collection("repots");

export const reportFireStore: ReportFireStore = {
  addReport: async (uid, photo_id, entry) => {
    await report
      .add({
        uid,
        photo_id,
        entry_key: entry,
        created_at: FieldValue.serverTimestamp(),
      })
      .catch((e) => {
        alert(e);
      });
  },
};
