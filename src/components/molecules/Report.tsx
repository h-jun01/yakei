import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  navigation: any;
};

const Report: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>報告</Text>
      <Text onPress={() => navigation.navigate("inappropriate")}>移動</Text>
    </View>
  );
};

export default Report;
