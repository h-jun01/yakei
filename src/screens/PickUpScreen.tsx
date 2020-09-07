import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PickUp from "../containers/organisms/PickUp";
import ImageList from "../containers/organisms/ImageList";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import { baseColor } from "../styles/thema/colors";

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
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="detail"
        component={ImageList}
        options={{
          title: "一覧",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="post"
        component={PostedImageDetail}
        options={{
          title: "投稿",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PickUpScreen;
