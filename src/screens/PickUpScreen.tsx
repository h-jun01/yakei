import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PickUp from "../containers/organisms/pickup/PickUp";
import Details from "../containers/organisms/home/Detail";

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
      <Stack.Screen
        name="detail"
        component={Details}
        options={{
          title: "一覧",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PickUpScreen;
