import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../containers/organisms/Post";
import { baseColor } from "../styles/thema/colors";

const PostScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
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
    </Stack.Navigator>
  );
};

export default PostScreen;
