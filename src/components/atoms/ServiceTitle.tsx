import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Size } from "../../styles/thema/fonts";
import { baseColor } from "../../styles/thema/colors";
import { useFonts, Flamenco_400Regular } from "@expo-google-fonts/flamenco";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

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

const platformIOS = Platform as PlatformIOSStatic;

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
    width: platformIOS.isPad ? wp("9%") : wp("12%"),
    height: platformIOS.isPad ? wp("9%") : wp("12%"),
    zIndex: 1,
    borderRadius: 8,
  },
  title: {
    color: baseColor.text,
    fontFamily: "Flamenco_400Regular",
    fontSize: platformIOS.isPad ? Size.iPadTitleSize : Size.titleSize,
    fontWeight: "600",
    marginLeft: wp("4%"),
    letterSpacing: platformIOS.isPad ? 6 : 5,
  },
});

export default ServiceTitle;
