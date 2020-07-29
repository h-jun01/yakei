import firebase from "firebase";
import { auth, db, FieldValue } from "./firebase";

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
  authenticationName: string;
};

type LginUser = {
  email: string;
  password: string;
};

const user = db.collection("users");
const userData = auth.currentUser;

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
    if (userData) {
      await userData
        .updateProfile({
          displayName: name,
        })
        .then(async () => {
          return await user
            .doc(userData.uid)
            .update({ name: name, update_time: FieldValue.serverTimestamp() });
        });
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
