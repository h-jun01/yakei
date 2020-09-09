import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Size } from "../../styles/thema/fonts";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts, Flamenco_400Regular } from "@expo-google-fonts/flamenco";

const ServiceTitle: FC = () => {
  let [fontsLoaded] = useFonts({
    Flamenco_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.titleWrap}>
        <Image
          style={styles.yakeiLogo}
          source={require("../../../assets/yakei-icon.png")}
        />
        <Text style={styles.title}>YAKEI</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  //アプリ名
  titleWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("5%"),
    marginLeft: "auto",
    marginRight: "auto",
  },
  yakeiLogo: {
    width: wp("12%"),
    height: wp("12%"),
    zIndex: 1,
    borderRadius: 6,
  },
  title: {
    color: baseColor.text,
    fontFamily: "Flamenco_400Regular",
    fontSize: Size.titleSize,
    fontWeight: "600",
    marginLeft: wp("4%"),
    letterSpacing: 5,
  },
});

export default ServiceTitle;
