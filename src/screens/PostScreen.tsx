import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "../containers/organisms/Post";

const PostScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PostScreen;
