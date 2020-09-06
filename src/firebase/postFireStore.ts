import firebase from "firebase";
import geohash from "ngeohash";
import { db } from "./firebase";

type PostFireStore = {
  getUploadImageFunc: (
    uid: string,
    uri: string
  ) => Promise<firebase.storage.UploadTaskSnapshot>;
};

const storageRef = firebase.storage().ref();

export const postFireStore: PostFireStore = {
  getUploadImageFunc: async (uid: string, uri: string) => {
    const filename = Date.now().toString();
    const metadata = {
      contentType: "image/jpeg",
    };
    const response = await fetch(uri);
    const blob = await response.blob();

    const upload = storageRef
      .child(`photo/${uid}/${filename}`)
      .put(blob, metadata);
    return upload;
  },
};
