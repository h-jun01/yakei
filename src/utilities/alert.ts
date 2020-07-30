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
