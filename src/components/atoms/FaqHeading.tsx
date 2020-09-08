import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  heading: string;
};

const FaqHeading: FC<Props> = ({ heading }) => {
  return (
    <View>
      <Text style={styles.textColor}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    fontWeight: "bold",
    color: "#303030",
  },
});

export default FaqHeading;
