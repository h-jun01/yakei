import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  switchingText: string;
  navigation: any;
};

const AuthSwitching: FC<Props> = ({ ...props }) => {
  const { switchingText, navigation } = props;
  return (
    <SafeAreaView style={styles.switchingWrap}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        activeOpacity={0.8}
        onPress={navigation}
      >
        <Text style={styles.switchingText}>{switchingText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  switchingWrap: {
    height: hp("7%"),
    width: deviceWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: utilityColor.authNav,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: utilityColor.border,
  },
  touchableOpacity: {
    width: deviceWidth,
    height: "100%",
    alignItems: "center",
  },
  switchingText: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Small,
    padding: wp("3.5%"),
  },
});

export default AuthSwitching;
