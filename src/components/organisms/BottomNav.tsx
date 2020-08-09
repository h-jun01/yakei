import React, { FC } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomNavContent from "./BottomNavContent";

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
      <Tab.Navigator tabBar={(props) => <BottomNavContent {...props} />}>
        <Tab.Screen name="Map" component={HomeScreen} />
        <Tab.Screen name="Collection" component={SettingsScreen} />
        <Tab.Screen name="Plus" component={HomeScreen} />
        <Tab.Screen name="Notification" component={SettingsScreen} />
        <Tab.Screen name="User" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavComponent;
