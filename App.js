import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
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
        <View style={styles.buttonWrap}>
          <Button title="+"></Button>
        </View>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View>
    </SafeAreaView>
  );
};

{/* <Text style={styles.bottomNavCenter}>テスト</Text> */}

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
  buttonWrap: {
    height: 120,
    lineHeight: 60,
    borderWidth: 30,
    borderRadius: 45,
    overflow: "hidden",
    borderColor: "#fff",
    backgroundColor: "#fff",
  }
  // buttonPlus: {
  //   height: 500,
  // }
});

export default App;