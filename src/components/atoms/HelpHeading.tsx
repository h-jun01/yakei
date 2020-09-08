import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";

type Props = {
  heading: string;
};

const HelpHeading: FC<Props> = ({ heading }) => {
  return (
    <View style={styles.backColor}>
      <Text style={styles.textColor}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backColor: {
    width: deviceWidth / 1.12,
    height: 44,
    backgroundColor: "#505e83",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 12,
  },
  textColor: {
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
  },
});

export default HelpHeading;
