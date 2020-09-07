import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../containers/organisms/Post";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import { baseColor } from "../styles/thema/colors";

const PostScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="post"
        component={Post}
        options={{
          title: "投稿する",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="postedImageDetail"
        component={PostedImageDetail}
        options={{
          title: "投稿",
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PostScreen;
