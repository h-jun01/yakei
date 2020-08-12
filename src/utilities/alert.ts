import { Alert } from "react-native";
import { accountFireStore } from "../firebase/accountFireStore";

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
        onPress: () => accountFireStore.signOutUser(),
        style: "default",
      },
    ],
    { cancelable: false }
  );
};
