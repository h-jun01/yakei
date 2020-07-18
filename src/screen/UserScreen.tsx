import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../containers/user/User";
import Details from "../containers/user/Detail";

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
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default UserScreen;
