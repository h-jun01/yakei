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
    </View>
  );
};

const styles = StyleSheet.create({
  lap: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 99,
    zIndex: 2,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default App;
