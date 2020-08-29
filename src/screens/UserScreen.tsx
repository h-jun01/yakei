import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/organisms/user/User";
import Setting from "../containers/organisms/user/Setting";
import EditProfile from "../containers/organisms/user/EditProfile";
import PasswordReset from "../components/organisms/PasswordReset";
import Notice from "../containers/organisms/user/Notice";
import TermsOfService from "../components/organisms/TermsOfService";
import PrivacyPolicy from "../components/organisms/PrivacyPolicy";

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
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          title: "プロフィール編集",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen
        name="passwordReset"
        component={PasswordReset}
        options={{
          title: "パスワード再設定",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen
        name="notice"
        component={Notice}
        options={{
          title: "お知らせ",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen
        name="termsOfService"
        component={TermsOfService}
        options={{
          title: "利用規約",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
      <Stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{
          title: "プライバシーポリシー",
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#181F32",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default UserScreen;
