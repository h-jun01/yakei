import React, { FC } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import CollectionButtonSvg from "../atoms/svg/CollectionButtonSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Map":
                return <MapButtonSvg />;
              case "Collection":
                return <CollectionButtonSvg />;
              case "Plus":
                return <PlusButtonSvg />;
              case "Notification":
                return <NotificationButtonSvg />;
              default:
                return <RoundedUserImage />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Map" component={HomeScreen} />
        <Tab.Screen name="Collection" component={SettingsScreen} />
        <Tab.Screen name="Plus" component={HomeScreen} />
        <Tab.Screen name="Notification" component={SettingsScreen} />
        <Tab.Screen name="User" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <FooterBackgroundSvg style={styles.fotterItem} />
    //   <View style={styles.fotterItem}>
    //     <MapButtonSvg />
    //     <CollectionButtonSvg />
    //     <PlusButtonSvg />
    //     <NotificationButtonSvg />
    //     <RoundedUserImage />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
  fotterItem: {
    zIndex: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: 0,
    width: Dimensions.get("window").width,
  },
});

export default BottomNavComponent;
