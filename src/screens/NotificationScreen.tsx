import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../containers/organisms/notification/Notification";
import Details from "../containers/organisms/notification/Detail";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
