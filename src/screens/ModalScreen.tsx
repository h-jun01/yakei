import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Report from "../components/molecules/Report";
import Inappropriate from "../components/molecules/Inappropriate";

const ModalScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="report"
        component={Report}
        options={{
          title: "報告する",
          // headerBackTitleVisible: false,
          // headerTintColor: baseColor.text,
          // headerStyle: {
          //   backgroundColor: baseColor.darkNavy,
          // },
        }}
      />
      <Stack.Screen
        name="inappropriate"
        component={Inappropriate}
        options={{
          title: "報告する",
          // headerBackTitleVisible: false,
          // headerTintColor: baseColor.text,
          // headerStyle: {
          //   backgroundColor: baseColor.darkNavy,
          // },
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalScreen;
