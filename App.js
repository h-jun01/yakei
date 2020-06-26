import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
// import MapView from "react-native-maps";

const App = () => {
  return (
    <SafeAreaView style={styles.lap}>
      <View style={styles.bottomNav}>
        <Text>テスト</Text>
        <Text>テスト</Text>
        <Text style={styles.bottomNavCenter}>テスト</Text>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lap: {
    backgroundColor: "#000",
    flex: 1,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomNavCenter: {
    height: 120,
    lineHeight: 60,
    borderWidth: 30,
    borderRadius: 45,
    overflow: "hidden",
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});

export default App;