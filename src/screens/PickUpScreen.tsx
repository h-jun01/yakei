import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PickUp from "../containers/organisms/pickup/PickUp";
import Details from "../containers/organisms/pickup/Detail";

const PickUpScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pickup"
        component={PickUp}
        options={{
          title: "ピックアップ",
          headerBackTitleVisible: false,
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

export default PickUpScreen;
