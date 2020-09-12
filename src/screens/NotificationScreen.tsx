import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Timestamp } from "@google-cloud/firestore";
import { baseColor } from "../styles/thema/colors";
import Notification from "../containers/organisms/Notification";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import OtherUser from "../containers/organisms/OtherUser";

export type NotificationScreenStackParamList = {
  notification: undefined;
  post: {
    imageData: {
      photo_id: string;
      uid: string;
      create_time: Timestamp;
      url: string;
      latitude: number;
      longitude: number;
      photogenic_subject: string;
    };
    shouldHeaderLeftBeCross?: boolean;
  };
  otherUser: { name: string; uid: string };
};

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator<NotificationScreenStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{
          title: "通知",
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="post"
        component={PostedImageDetail}
        options={({ route }) => ({
          title: route.params.imageData.photogenic_subject,
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        })}
      />
      <Stack.Screen
        name="otherUser"
        component={OtherUser}
        options={({ route }) => ({
          title: route.params.name,
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
