import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Timestamp } from "@google-cloud/firestore";
import { baseColor } from "../styles/thema/colors";
import User from "../containers/organisms/User";
import Setting from "../containers/organisms/Setting";
import EditProfile from "../containers/organisms/EditProfile";
import PasswordReset from "../components/organisms/PasswordReset";
import News from "../containers/organisms/News";
import Help from "../components/organisms/Help";
import Faq from "../containers/organisms/Faq";
import TermsOfService from "../containers/organisms/TermsOfService";
import PrivacyPolicy from "../containers/organisms/PrivacyPolicy";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import OtherUser from "../containers/organisms/OtherUser";

export type UserScreenStackParamList = {
  user: undefined;
  setting: undefined;
  editProfile: undefined;
  passwordReset: undefined;
  notice: undefined;
  help: undefined;
  termsOfService: undefined;
  privacyPolicy: undefined;
  faq: { yAxis: number };
  post: {
    imageData: {
      photo_id: string;
      uid: string;
      create_time: Timestamp;
      url: string;
      latitude: number;
      longitude: number;
      favoriteNumber: number;
      photogenic_subject: string;
      img_index: string;
      aspectRatio: number;
    };
    shouldHeaderLeftBeCross?: boolean;
  };
  otherUser: { name: string; uid: string };
  detail: { photoDataList: PhotoDataList[] };
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

const UserScreen: FC = () => {
  const Stack = createStackNavigator<UserScreenStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user"
        component={User}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={{
          title: "設定",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          title: "プロフィール編集",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="passwordReset"
        component={PasswordReset}
        options={{
          title: "パスワード再設定",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="notice"
        component={News}
        options={{
          title: "お知らせ",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="help"
        component={Help}
        options={{
          title: "ヘルプ",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="faq"
        component={Faq}
        options={{
          title: "よくある質問",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="termsOfService"
        component={TermsOfService}
        options={{
          title: "利用規約",
          headerBackTitleVisible: false,
          headerTintColor: baseColor.text,
          headerStyle: {
            backgroundColor: baseColor.darkNavy,
          },
        }}
      />
      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: "プライバシーポリシー",
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

export default UserScreen;
