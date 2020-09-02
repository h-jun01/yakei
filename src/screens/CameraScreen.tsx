import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Camera from "../containers/organisms/Camera";

const CameraScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CameraScreen;
