import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  heading: string;
};

const HelpHeading: FC<Props> = ({ heading }) => {
  return (
    <View>
      <Text>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HelpHeading;
