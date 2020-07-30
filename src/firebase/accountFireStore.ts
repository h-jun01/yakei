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
  providers: (email: string) => Promise<string[]>;
  updateName: (name: string) => Promise<void>;
  upload: (postIndex: string) => firebase.storage.Reference;
  updateProfileImage: (url: string) => Promise<void>;
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
  updateProfileImage: async (url: string) => {
    const userData = auth.currentUser;
    if (userData) {
      return await user.doc(userData.uid).update({
        user_img: url,
        update_time: FieldValue.serverTimestamp(),
      });
    }
  },
  //ストレージに画像を保存
  upload: (postIndex: string) => {
    const userData = auth.currentUser;
    return storage.ref(`users/${userData?.uid}`).child(postIndex);
  },
  //認証済みチェック
  providers: async (email: string) => {
    return await auth.fetchSignInMethodsForEmail(email);
  },
  //認証名
  authenticationName:
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
};
