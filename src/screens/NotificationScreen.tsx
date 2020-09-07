import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../containers/organisms/Notification";
import { baseColor } from "../styles/thema/colors";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "通知",
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
