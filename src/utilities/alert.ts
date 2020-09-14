import { Alert } from "react-native";
import { auth } from "../firebase/firebase";

export const callingAlert = (alertMessage: string): void => {
  Alert.alert(
    "エラー",
    alertMessage,
    [
      {
        text: "OK",
        style: "default",
      },
    ],
    { cancelable: false }
  );
};

export const callingDoneAlert = (alertMessage: string): void => {
  Alert.alert(
    "送信完了",
    alertMessage,
    [
      {
        text: "OK",
        style: "default",
      },
    ],
    { cancelable: false }
  );
};

export const callingLogoutAlert = (): void => {
  Alert.alert(
    "確認",
    "ログアウトしますか？",
    [
      {
        text: "キャンセル",
        style: "default",
      },
      {
        text: "ログアウト",
        onPress: () => auth.signOut(),
        style: "destructive",
      },
    ],
    { cancelable: false }
  );
};

export const callingDeleteAlert = (
  deletingPosts: () => Promise<void>
): void => {
  Alert.alert("確認", "写真を削除しますか？", [
    {
      text: "キャンセル",
      style: "default",
    },
    {
      text: "削除",
      onPress: () => deletingPosts(),
      style: "destructive",
    },
  ]);
};
