import firebase from "firebase";
import geohash from "ngeohash";
import { db } from "./firebase";

type PhotoFireStore = {
  getPhotoList: (uid: string) => Promise<firebase.firestore.DocumentData[]>;
  getAllPhotoList: () => Promise<firebase.firestore.DocumentData[]>;
  getFavoriteNumber: (photo_id: string) => Promise<number>;
  IncrementFavoriteNumber: (
    photo_id: string,
    favoriteNumber: number
  ) => Promise<void>;
  DecrementFavoriteNumber: (
    photo_id: string,
    favoriteNumber: number
  ) => Promise<void>;
};

const photo = db.collection("photos");

export const photoFireStore: PhotoFireStore = {
  //自分の投稿した写真を取得
  getPhotoList: async (uid: string) => {
    const photoDataList: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await photo
      .where("uid", "==", uid)
      .orderBy("create_time", "asc")
      .get();
    querySnapshot.forEach((doc) => {
      photoDataList.push(doc.data());
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
  IncrementFavoriteNumber: async (photo_id: string, favoriteNumber: number) => {
    photo.doc(photo_id).update({
      favoriteNumber: favoriteNumber += 1,
    });
  },
  DecrementFavoriteNumber: async (photo_id: string, favoriteNumber: number) => {
    photo.doc(photo_id).update({
      favoriteNumber: favoriteNumber -= 1,
    });
  },
};
