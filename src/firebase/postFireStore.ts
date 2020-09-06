import firebase from "firebase";
import geohash from "ngeohash";
import { db, FieldValue } from "./firebase";

type PhotoData = {
  latitude: number;
  longitude: number;
  photogenicSubject: string;
  uid: string;
  url: string;
};
type PostFireStore = {
  addImageData: (data: PhotoData) => Promise<string>;
  addPhotoId: (docId: string) => Promise<string>;
};

const photosRef = db.collection("photos");

export const postFireStore: PostFireStore = {
  // photosコレクションにデータを追加
  addImageData: (data: PhotoData) => {
    const { latitude, longitude, photogenicSubject, uid, url } = data;
    const geohashStr = geohash.encode(latitude, longitude);
    return new Promise((resolve) => {
      photosRef
        .add({
          create_time: FieldValue.serverTimestamp(),
          favoriteNumber: 0,
          geohash: geohashStr,
          latitude,
          longitude,
          photogenic_subject: photogenicSubject,
          uid,
          url,
        })
        .then(async (docRef) => {
          const addIdResult = await postFireStore.addPhotoId(docRef.id);
          if (addIdResult === "error") resolve("error");
          resolve("success");
        })
        .catch((error) => {
          resolve("error");
        });
    });
  },
  addPhotoId: (docId: string) => {
    return new Promise((resolve) => {
      photosRef
        .doc(docId)
        .update({
          photo_id: docId,
        })
        .then(() => {
          resolve("success");
        })
        .catch((error) => {
          resolve("error");
        });
    });
  },
};
