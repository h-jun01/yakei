import firebase from "firebase";
import geohash from "ngeohash";
import { db } from "./firebase";

type Reference = firebase.storage.Reference;
type PostFireStore = {
  getUploadRef: (uid: string) => Reference;
  uploadPostImage: (ref: Reference, uri: string) => Promise<string>;
  getImageUrl: (ref: Reference) => Promise<string>;
};

const storageRef = firebase.storage().ref();

export const postFireStore: PostFireStore = {
  // 画像をアップロードするストレージ参照を取得する
  getUploadRef: (uid: string) => {
    const filename = Date.now().toString();
    const uploadRef = storageRef.child(`photo/${uid}/${filename}`);
    return uploadRef;
  },
  // 画像をstorageに保存
  uploadPostImage: async (ref: Reference, uri: string) => {
    const metadata = { contentType: "image/jpeg" };
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve) => {
      ref
        .put(blob, metadata)
        .then((snapshot) => {
          resolve("success");
        })
        .catch((error) => {
          resolve("error");
        });
    });
  },
  // ストレージ参照からURLを取得する
  getImageUrl: (ref: Reference) =>
    new Promise((resolve) => {
      ref
        .getDownloadURL()
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          resolve("error");
        });
    }),
};
