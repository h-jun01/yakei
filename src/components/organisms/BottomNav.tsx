import React, { FC } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FooterBackgroundSvg from "../atoms/svg/FooterBackgroundSvg";
import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import FolderButtonSvg from "../atoms/svg/CollectionButtonSvg";
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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <FooterBackgroundSvg style={styles.fotterItem} />
    //   <View style={styles.fotterItem}>
    //     <MapButtonSvg />
    //     <FolderButtonSvg />
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
