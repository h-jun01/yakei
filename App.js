import React from "react";
import { SafeAreaView } from "react-native";
import { decode, encode } from "base-64";
import Auth from "./componets/Auth";
import { styles } from "./styles/app";

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

export default App;
