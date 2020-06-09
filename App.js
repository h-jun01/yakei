import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const App = () => {
  return (
    <MapView
      style={{ flex: 1 }}
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
  );
};

export default App;
