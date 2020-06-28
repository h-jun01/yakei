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
  TouchableHighlight,
} from "react-native";
// import MapView from "react-native-maps";

const App = () => {
  return (
    <SafeAreaView style={styles.lap}>
      <View style={styles.bottomNavCenterWrap}>
        <View style={styles.bottomNavCenter}></View>
      </View>
      <View style={styles.bottomNav}>
        <Text>テスト</Text>
        <Text>テスト</Text>
        <TouchableHighlight style={styles.buttonWrap}>
          <Text style={styles.buttonPlus}>+</Text>
        </TouchableHighlight>
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
  bottomNavCenterWrap: {
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
    bottom: 7,
    zIndex: 2,
    height: 122,
    width: 122,
    borderWidth: 30,
    borderRadius: 100,
    borderColor: "#fff",
    backgroundColor: "#fff",
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
  buttonWrap: {
    bottom: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    width: 46,
    height: 46,
    borderWidth: 3,
    borderRadius: 23,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  buttonPlus: {
    bottom: 3,
    color: "#000",
    fontSize: 36,
  }
});

export default App;