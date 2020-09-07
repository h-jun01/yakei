import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/organisms/User";
import Setting from "../containers/organisms/Setting";
import EditProfile from "../containers/organisms/EditProfile";
import PasswordReset from "../components/organisms/PasswordReset";
import News from "../containers/organisms/News";
import Help from "../components/organisms/Help";
import TermsOfService from "../components/organisms/TermsOfService";
import PrivacyPolicy from "../components/organisms/PrivacyPolicy";
import PostedImageDetail from "../containers/organisms/PostedImageDetail";
import { baseColor } from "../styles/thema/colors";

const UserScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
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

export default UserScreen;
