import { decode, encode } from "base-64";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Auth from "./componets/Auth";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const App = () => {
  return (
    <SafeAreaView style={styles.lap}>
      <Auth />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lap: {
    flex: 1,
    backgroundColor: "#1C3952",
    // justifyContent: "center",
  },
});

export default App;
