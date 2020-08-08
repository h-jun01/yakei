import { Alert } from "react-native";

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
