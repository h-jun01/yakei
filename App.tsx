import React, { FC } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { decode, encode } from "base-64";
import { rootReducer } from "./src/reducers";
import Root from "./src";
import "./src/firebase/firebase";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const store = createStore(rootReducer);

const App: FC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
