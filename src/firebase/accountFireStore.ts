import firebase from "firebase";
import { auth, db, storage, FieldValue } from "./firebase";

type AccountFireStore = {
  getUser: (
    uid: string
  ) => Promise<
    firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
  >;
  loginUser: (account: LginUser) => Promise<firebase.auth.UserCredential>;
  signOutUser: () => void;
  updateName: (name: string) => Promise<void>;
  uploadStorageImage: (postIndex: string) => firebase.storage.Reference;
  updateProfileImage: (img_url: string) => Promise<void>;
  updateImgIndex: (img_index: string) => Promise<void>;
  providers: (email: string) => Promise<string[]>;
  deleteStorageImage: (imgIndex: string) => Promise<void> | undefined;
  authenticationName: string;
};

type LginUser = {
  email: string;
  password: string;
};

const user = db.collection("users");

export const accountFireStore: AccountFireStore = {
  //ユーザ情報を取得
  getUser: (uid: string) => {
    return user.doc(uid).get();
  },
  //ログイン処理
  loginUser: async (account: LginUser) => {
    return await auth.signInWithEmailAndPassword(
      account.email,
      account.password
    );
  },
  //ログアウト処理
  signOutUser: () => {
    auth.signOut();
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
  //プロフィール画像の更新
  updateProfileImage: async (user_img: string) => {
    const userData = auth.currentUser;
    if (userData) {
      await userData
        .updateProfile({
          photoURL: user_img,
        })
        .then(async () => {
          return await user.doc(userData.uid).update({
            user_img,
            update_time: FieldValue.serverTimestamp(),
          });
        });
    }
  },
  //画像URLの更新
  updateImgIndex: async (img_index: string) => {
    const userData = auth.currentUser;
    if (userData) {
      return await user.doc(userData.uid).update({
        img_index,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //storageに画像を保存
  uploadStorageImage: (postIndex: string) => {
    const userData = auth.currentUser;
    return storage.ref(`users/${userData?.uid}`).child(postIndex);
  },
  deleteStorageImage: (imgIndex: string) => {
    const userData = auth.currentUser;
    if (userData) {
      return storage.ref(`users/${userData.uid}`).child(imgIndex).delete();
    }
  },
  //認証済みチェック
  providers: async (email: string) => {
    return await auth.fetchSignInMethodsForEmail(email);
  },
  //認証名
  authenticationName:
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
};
