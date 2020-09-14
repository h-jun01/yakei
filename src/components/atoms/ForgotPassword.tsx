import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
  navigation: any;
};

const ForgotPassword: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.ForgotPasswordText}>
      <Text
        style={styles.ForgotPasswordTextColor}
        onPress={() => navigation.navigate("passwordReset")}
      >
        パスワードをお忘れの場合はこちら
      </Text>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  ForgotPasswordText: {
    marginTop: hp(".5%"),
  },
  ForgotPasswordTextColor: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Small,
    textAlign: "center",
    lineHeight: Size.lineHeight,
  },
});

export default ForgotPassword;
