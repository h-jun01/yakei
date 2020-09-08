import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { Size } from "../../styles/thema/fonts";

type Props = {
  heading: string;
};

const FaqHeading: FC<Props> = ({ heading }) => {
  return <Text style={styles.textColor}>{heading}</Text>;
};

const styles = StyleSheet.create({
  textColor: {
    fontSize: Size.Large,
    fontWeight: "bold",
    color: "#303030",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FaqHeading;
