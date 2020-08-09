import React, { FC } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomNav from "./src/components/organisms/BottomNav";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
};

const BottomNavComponent: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
        <Tab.Screen name="スポット" component={HomeScreen} />
        <Tab.Screen name="ギャラリー" component={SettingsScreen} />
        <Tab.Screen name="Plus" component={HomeScreen} />
        <Tab.Screen name="通知" component={SettingsScreen} />
        <Tab.Screen name="マイページ" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavComponent;
