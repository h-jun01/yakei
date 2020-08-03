import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/organisms/user/User";
import Setting from "../containers/organisms/user/Setting";
import EditProfile from "../containers/organisms/user/EditProfile";
import TermsOfService from "../componets/organisms/user/TermsOfService";
import PrivacyPolicy from "../componets/organisms/user/PrivacyPolicy";

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
      <Stack.Screen name="設定" component={Setting} />
      <Stack.Screen name="プロフィール編集" component={EditProfile} />
      <Stack.Screen name="利用規約" component={TermsOfService} />
      <Stack.Screen name="プライバシーポリシー" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default UserScreen;
