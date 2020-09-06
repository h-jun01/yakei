// import React from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
// import { Notifications } from "expo";
// import * as Permissions from "expo-permissions";

// export default class PushNotification extends React.Component {
//   registerForPushNotificationsAsync = async () => {
//     try {
//       //現在のNotificationパーミッション状況取得
//       const { status: existingStatus } = await Permissions.getAsync(
//         Permissions.NOTIFICATIONS
//       );
//       let finalStatus = existingStatus;

//       //statusが許可じゃなければ（許可済みなら何もしない）
//       if (existingStatus !== "granted") {
//         //許可を尋ねる
//         const { status } = await Permissions.askAsync(
//           Permissions.NOTIFICATIONS
//         );
//         finalStatus = status;
//       }

//       //それでも許可されてなかったら何もしない
//       if (finalStatus !== "granted") {
//         return;
//       }

//       const token = await Notifications.getExpoPushTokenAsync();

//       alert("token=" + token);
//       console.log(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>App</Text>
//         <Button
//           title="get Notification token"
//           onPress={this.registerForPushNotificationsAsync}
//         />
//       </View>
//     );
//   }
// }
import React, { useState, useEffect } from "react";
import { Text, View, Button, Vibration, Platform } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Pattern } from "react-native-svg";

const PushNotification = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState({});

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );

      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      setExpoPushToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    Notifications.addListener(_handleNotification);
  }, []);

  const _handleNotification = (notification) => {
    Vibration.vibrate(400);
    console.log(notification);
    // setNotification({ notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { data: "goes here" },
      _displayInForeground: true,
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(notification.data)}</Text> */}
        <Text>テス</Text>
      </View>
      <Button
        title={"Press to Send Notification"}
        onPress={() => sendPushNotification()}
      />
    </View>
  );
};

export default PushNotification;
