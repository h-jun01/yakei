import React, { FC } from "react";
import { View, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingScreen: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner
        visible={true}
        textContent="読み込み中..."
        textStyle={{ color: "#fff", fontSize: 13 }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </View>
  );
};

export default LoadingScreen;
