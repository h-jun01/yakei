import firebase from "firebase";
import geohash from "ngeohash";
import { db, storage } from "./firebase";
import { Timestamp } from "@google-cloud/firestore";

type PickUpDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

type PhotoFireStore = {
  getPhotoList: (uid: string) => Promise<PickUpDataList[]>;
  getAllPhotoList: () => Promise<firebase.firestore.DocumentData[]>;
  getFavoriteNumber: (photo_id: string) => Promise<number>;
  incrementFavoriteNumber: (
    photo_id: string,
    favoriteNumber: number
  ) => Promise<void>;
  decrementFavoriteNumber: (
    photo_id: string,
    favoriteNumber: number
  ) => Promise<void>;
  deletingPostedPhoto: (photo_id: string) => Promise<void>;
  removePostPhotoWithStorage: (img_index: string, uid: string) => Promise<void>;
};

const photo = db.collection("photos");

export const photoFireStore: PhotoFireStore = {
  //自分の投稿した写真を取得
  getPhotoList: async (uid: string) => {
    const photoDataList: PickUpDataList[] = [];
    const querySnapshot = await photo
      .where("uid", "==", uid)
      .orderBy("create_time", "asc")
      .get();
    querySnapshot.forEach((doc) => {
      photoDataList.push(doc.data() as PickUpDataList);
    });
    return photoDataList;
  },
  // 全てのユーザーの写真取得
  getAllPhotoList: async () => {
    const allPhotoList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo.orderBy("create_time", "asc").get();
    querySnapshot.forEach((doc) => {
      allPhotoList.push(doc.data());
    });
    return allPhotoList;
  },
  // お気に入り数の取得
  getFavoriteNumber: async (photo_id: string) => {
    return await photo
      .doc(photo_id)
      .get()
      .then(async (res) => {
        return (await res.data()?.favoriteNumber) as number;
      });
  },
  // お気に入り数の増加
  incrementFavoriteNumber: async (photo_id: string, favoriteNumber: number) => {
    photo.doc(photo_id).update({
      favoriteNumber: favoriteNumber += 1,
    });
  },
  // お気に入り数を減少
  decrementFavoriteNumber: async (photo_id: string, favoriteNumber: number) => {
    photo.doc(photo_id).update({
      favoriteNumber: favoriteNumber -= 1,
    });
  },
  // 投稿した写真をコレクションから削除
  deletingPostedPhoto: async (photo_id: string) => {
    await photo
      .doc(photo_id)
      .delete()
      .catch((e) => {
        alert(e);
      });
  },
  removePostPhotoWithStorage: async (img_index: string, uid: string) => {
    await storage.ref(`photo/${uid}`).child(img_index).delete();
  },
};
