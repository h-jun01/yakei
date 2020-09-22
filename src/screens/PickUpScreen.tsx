import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Timestamp } from "@google-cloud/firestore";
import { baseColor } from "../styles/thema/colors";
import PickUp from "../containers/organisms/PickUp";
import ImageList from "../containers/organisms/ImageList";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import OtherUser from "../containers/organisms/OtherUser";

export type PickUpScreenStackParamList = {
  pickup: undefined;
  detail: { photoDataList: PhotoDataList[] };
  post: {
    imageData: {
      photo_id: string;
      uid: string;
      create_time: Timestamp;
      url: string;
      latitude: number;
      longitude: number;
      photogenic_subject: string;
      img_index: string;
      aspectRatio: number;
    };
    shouldHeaderLeftBeCross?: boolean;
  };
  otherUser: { name: string; uid: string };
};

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

const PickUpScreen: FC = () => {
  const Stack = createStackNavigator<PickUpScreenStackParamList>();
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
        options={({ route }) => ({
          title: route.params.imageData.photogenic_subject,
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        })}
      />
      <Stack.Screen
        name="otherUser"
        component={OtherUser}
        options={({ route }) => ({
          title: route.params.name,
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default PickUpScreen;
