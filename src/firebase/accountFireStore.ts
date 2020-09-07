import React from "react";
import firebase from "firebase";
import { auth, db, storage, FieldValue } from "./firebase";
import {
  callingAlert,
  callingDoneAlert,
  callingLogoutAlert,
} from "../utilities/alert";

type AccountFireStore = {
  getUser: (
    uid: string
  ) => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
  getUserName: (uid: string) => Promise<React.SetStateAction<string>>;
  getUserImage: (uid: string) => Promise<React.SetStateAction<string>>;
  getDeviceToken: (uid: string) => Promise<string>;
  saveDeviceToken: (uid: string, token: string) => Promise<void>;
  loginUser: (
    email: string,
    password: string
  ) => Promise<void | firebase.auth.UserCredential>;
  loginGoogleUser: (
    idToken: string,
    accessToken: string
  ) => Promise<void | firebase.auth.UserCredential>;
  signOutUser: () => void;
  updateName: (name: string) => Promise<void>;
  upDateSelfIntroduction: (self_introduction: string) => Promise<void>;
  uploadStorageImage: (postIndex: string) => firebase.storage.Reference;
  uploadStorageHeaderImage: (postIndex: string) => firebase.storage.Reference;
  updateProfileImage: (img_url: string) => Promise<void>;
  updateProfileHeaderImage: (user_header_img: string) => Promise<void>;
  updateImgIndex: (img_index: string) => Promise<void>;
  updateHeaderImgIndex: (header_img_index: string) => Promise<void>;
  updateFavoriteList: (photo_id: string) => Promise<void>;
  deleteFavoriteItem: (photo_id: string) => Promise<void>;
  deleteStorageImage: (imgIndex: string) => Promise<void> | undefined;
  deleteStorageHeaderImage: (
    headerImgIndex: string
  ) => Promise<any> | undefined;
  passwordResetEmail: (emailAddress: string) => Promise<void>;
  providers: (email: string) => Promise<string[]>;
  authenticationName: string;
};

const user = db.collection("users");

export const accountFireStore: AccountFireStore = {
  //ユーザ情報を取得
  getUser: (uid: string) => {
    return user.doc(uid).get();
  },
  //ユーザ名を取得
  getUserName: async (uid: string) => {
    return await accountFireStore.getUser(uid).then(async (res) => {
      return (await res.data()?.name) as string;
    });
  },
  //ユーザのアイコン画像を取得
  getUserImage: async (uid: string) => {
    return await accountFireStore.getUser(uid).then(async (res) => {
      return (await res.data()?.user_img) as string;
    });
  },
  // デバイスのトークンを取得
  getDeviceToken: (uid: string) => {
    return new Promise((resolve) => {
      accountFireStore.getUser(uid).then(async (res) => {
        resolve((await res.data()?.token) as string);
      });
    });
  },
  // デバイスのトークンを保存
  saveDeviceToken: async (uid: string, token: string) => {
    await user.doc(uid).update({
      token,
    });
  },
  //ログイン処理
  loginUser: async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password).catch(() => {
      callingAlert("メールアドレスまたはパスワードが違います。");
      return;
    });
  },
  //Googleログイン処理
  loginGoogleUser: async (idToken: string, accessToken: string) => {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    return await auth.signInWithCredential(credential);
  },
  //ログアウト処理
  signOutUser: () => {
    callingLogoutAlert();
  },
  //名前の更新
  updateName: async (name: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await userData
        .updateProfile({
          displayName: name,
        })
        .then(async () => {
          return await user.doc(userData.uid).update({
            name: name,
            update_time: FieldValue.serverTimestamp(),
          });
        });
    }
  },
  //自己紹介の更新
  upDateSelfIntroduction: async (self_introduction: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        self_introduction,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //プロフィールアイコン画像の更新
  updateProfileImage: async (user_img: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await userData
        .updateProfile({
          photoURL: user_img,
        })
        .then(async () => {
          await user.doc(userData.uid).update({
            user_img,
            update_time: FieldValue.serverTimestamp(),
          });
        });
    }
  },
  //プロフィールヘッダー画像の更新
  updateProfileHeaderImage: async (user_header_img: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        user_header_img,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //アイコン画像のURLを更新
  updateImgIndex: async (img_index: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        img_index,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //ヘッダー画像のURLを更新
  updateHeaderImgIndex: async (header_img_index: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        header_img_index,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //storageのアイコン画像を参照
  uploadStorageImage: (postIndex: string) => {
    const userData = auth.currentUser;
    return storage.ref(`users/${userData?.uid}`).child(postIndex);
  },
  //storageのヘッダー画像を参照
  uploadStorageHeaderImage: (postIndex: string) => {
    const userData = auth.currentUser;
    return storage.ref(`users/${userData?.uid}/header`).child(postIndex);
  },
  // お気に入りに追加
  updateFavoriteList: async (photo_id: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        favorite_list: FieldValue.arrayUnion(photo_id),
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  // お気に入り削除
  deleteFavoriteItem: async (photo_id: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await user.doc(userData.uid).update({
        favorite_list: FieldValue.arrayRemove(photo_id),
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //storageからアイコン画像を削除
  deleteStorageImage: (imgIndex: string) => {
    const userData = auth.currentUser;
    if (userData) {
      return storage.ref(`users/${userData.uid}`).child(imgIndex).delete();
    }
  },
  //storageからヘッダー画像を削除
  deleteStorageHeaderImage: (headerImgIndex: string) => {
    const userData = auth.currentUser;
    if (userData) {
      return storage
        .ref(`users/${userData.uid}/header`)
        .child(headerImgIndex)
        .delete();
    }
  },
  //パスワード変更
  passwordResetEmail: async (emailAddress: string) => {
    await auth
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        callingDoneAlert("再設定用のURLを送信しました。");
        return;
      })
      .catch((err) => {
        callingAlert("登録されていないメールアドレスです。");
        return;
      });
  },
  //認証済みチェック
  providers: async (email: string) => {
    return await auth.fetchSignInMethodsForEmail(email);
  },
  //認証名
  authenticationName:
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
};
