import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  navigation: any;
};

const Spam: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.heading}>報告</Text>
      <Text onPress={() => navigation.navigate("inappropriate")}>移動</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Spam;
