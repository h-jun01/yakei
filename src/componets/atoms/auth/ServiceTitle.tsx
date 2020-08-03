import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../styles/auth";

const ServiceTitle: FC = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>yakei(仮)</Text>
    </View>
  );
};

export default ServiceTitle;
