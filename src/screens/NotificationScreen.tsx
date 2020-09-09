import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { baseColor } from "../styles/thema/colors";
import Notification from "../containers/organisms/Notification";
import OtherUser from "../containers/organisms/OtherUser";

type NotificationScreenStackParamList = {
  notification: undefined;
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
        name="otherUser"
        component={OtherUser}
        options={({ route }) => ({
          title: `${route.params.name}`,
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
