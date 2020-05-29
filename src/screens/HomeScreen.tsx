import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/organisms/home/Home";
import Details from "../containers/organisms/home/Detail";

const HomeScreen: FC = () => {
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

export default HomeScreen;