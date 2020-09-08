import React, { FC } from "react";
import { StatusBar, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { decode, encode } from "base-64";
import { rootReducer } from "./src/reducers";
import ScreenSwitcher from "./src/ScreenSwitcher";
import "./src/firebase/firebase";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

if (Platform.OS === "ios") {
  StatusBar.setBarStyle("light-content", true);
} else if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("#181f32", true);
}

const store = createStore(rootReducer);

const App: FC = () => {
  return (
    <Provider store={store}>
      <ScreenSwitcher />
    </Provider>
  );
};

export default App;
