import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const App = () => {
  return (
    <View style={styles.lap}>
      <MapView
        style={{ flex: 3, zIndex: 1 }}
        initialRegion={{
          latitude: 35.681236,
          longitude: 139.767125,
          latitudeDelta: 0.02, //小さくなるほどズーム
          longitudeDelta: 0.02,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 35.681236,
            longitude: 139.767125,
          }}
          title={"東京駅"}
          description={"駅"}
          // onPress={() => alert("click")}
        />
      </MapView>
      <View style={styles.bottomNav}>
        <Text>テスト</Text>
        <Text>テスト</Text>
        <Text style={styles.bottomNavCenter}>テスト</Text>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lap: {
    // backgroundColor: "rgba(0,0,0,0.6)",
    // flex: 99,
    // zIndex: 2,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 75,
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 20,
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
