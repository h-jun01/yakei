import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/organisms/user/User";
import Setting from "../containers/organisms/user/Setting";
import EditProfile from "../containers/organisms/user/EditProfile";
import PasswordReset from "../components/organisms/user/PasswordReset";
import Notice from "../containers/organisms/user/Notice";
import TermsOfService from "../components/organisms/user/TermsOfService";
import PrivacyPolicy from "../components/organisms/user/PrivacyPolicy";

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
        name="設定"
        component={Setting}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="プロフィール編集"
        component={EditProfile}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="パスワード再設定"
        component={PasswordReset}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="お知らせ"
        component={Notice}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="利用規約"
        component={TermsOfService}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#141D2C",
          },
        }}
      />
      <Stack.Screen
        name="プライバシーポリシー"
        component={PrivacyPolicy}
        options={{
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

export default UserScreen;
