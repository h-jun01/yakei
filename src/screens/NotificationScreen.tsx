import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../containers/organisms/notification/Notification";
import Details from "../containers/organisms/notification/Detail";
import { baseColor } from "../styles/thema/colors";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
