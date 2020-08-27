import React, { FC } from "react";
import { View, Image, } from "react-native";
import { styles } from "../../../styles/auth/auth";


const ServiceTitle: FC = () => {
  return (
    <View style={styles.titleWrap}>
      <Image
        style={styles.yakeiLogo}
        source={require("../../../../assets/yakei-logo.png")}
      />
    </View>
  );
};

export default ServiceTitle;
