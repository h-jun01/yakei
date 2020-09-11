import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { baseColor } from "../styles/thema/colors";
import { Timestamp } from "@google-cloud/firestore";
import Post from "../containers/organisms/Post";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import PostedMap from "../containers/organisms/PostedMap";

export type PostScreenStackParamList = {
  post: undefined;
  postedImageDetail: {
    imageData: {
      photo_id: string;
      uid: string;
      create_time: Timestamp;
      url: string;
      latitude: number;
      longitude: number;
      photogenic_subject: string;
    };
    shouldHeaderLeftBeCross?: boolean;
  };
  postedMap: undefined;
};

const PostScreen: FC = () => {
  const Stack = createStackNavigator<PostScreenStackParamList>();
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
        options={({ route }) => ({
          title: route.params.imageData.photogenic_subject,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        })}
      />
      <Stack.Screen
        name="postedMap"
        component={PostedMap}
        options={{
          title: "撮影場所を選択",
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
