import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/organisms/Home";
import ImageList from "../containers/organisms/ImageList";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import { baseColor } from "../styles/thema/colors";

const HomeScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
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

export default HomeScreen;
