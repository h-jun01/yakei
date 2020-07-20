import React, { FC } from "react";
import { View, Text } from "react-native";

const LoadingScreen: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ロード中だよ</Text>
    </View>
  );
};

export default LoadingScreen;
