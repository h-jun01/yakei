import { Alert } from "react-native";

type AlertInformation = {
  alertTitle: string;
  alertMessage: string;
  alertClose: string;
  alertStyle: "default" | "cancel" | "destructive" | undefined;
};

export const callingAlert = (args: AlertInformation): void => {
  Alert.alert(
    args.alertTitle,
    args.alertMessage,
    [
      {
        text: args.alertClose,
        style: args.alertStyle,
      },
    ],
    { cancelable: false }
  );
};
