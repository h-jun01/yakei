import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../styles/auth/auth";

const ServiceTitle: FC = () => {
  return (
    <View style={styles.titleWrap}>
      <Text style={styles.titleText}>YAKEI</Text>
    </View>
  );
};

export default ServiceTitle;
