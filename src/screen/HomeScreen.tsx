import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/home/Home";
import Details from "../containers/home/Detail";

const NotificationScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
