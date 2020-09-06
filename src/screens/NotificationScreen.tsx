import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../containers/organisms/Notification";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "通知",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
