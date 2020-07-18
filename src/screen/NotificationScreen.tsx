import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../containers/notification/Notification";
import Details from "../containers/notification/Detail";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
