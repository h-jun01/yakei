import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/organisms/home/Home";
import Details from "../containers/organisms/home/Detail";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";

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
        component={Details}
        options={{
          title: "一覧",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="post"
        component={PostedImageDetail}
        options={{
          title: "投稿",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
