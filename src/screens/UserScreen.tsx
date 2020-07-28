import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/user/User";
import Setting from "../containers/user/Setting";
import TermsOfService from "../componets/user/TermsOfService";
import PrivacyPolicy from "../componets/user/PrivacyPolicy";

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
      <Stack.Screen name="利用規約" component={TermsOfService} />
      <Stack.Screen name="プライバシーポリシー" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default UserScreen;
