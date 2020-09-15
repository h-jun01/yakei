import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Size } from "../../styles/thema/fonts";

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

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  backColor: {
    width: deviceWidth / 1.12,
    height: platformIOS.isPad ? hp("6%") : hp("5%"),
    backgroundColor: "#505e83",
    justifyContent: "center",
    marginVertical: hp("1.5%"),
  },
  textColor: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: wp("5%"),
  },
});

export default HelpHeading;
