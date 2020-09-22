import React, { FC, Fragment } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import { accountFireStore } from "../../firebase/accountFireStore";
import { useInput } from "../../utilities/hooks/input";
import { Hoshi } from "react-native-textinput-effects";
import { Size } from "../../styles/thema/fonts";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const bannerError = () => {
  console.log("Ad Fail error");
};

const PasswordReset: FC = () => {
  const email = useInput("");
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.passwdChangeWrap}>
          <Hoshi
            //先頭文字を大文字にしない
            autoCapitalize={"none"}
            //キーボードの設定
            keyboardType="email-address"
            returnKeyType="done"
            blurOnSubmit={true}
            placeholder=""
            label={"メールアドレスを入力 "}
            borderColor={"#202840"}
            inputPadding={platformIOS.isPad ? wp("3%") : wp("2.5%")}
            inputStyle={styles.passwdInput}
            labelStyle={styles.passwdLabel}
            {...email}
          />
          <Text
            style={styles.submitButton}
            onPress={() => accountFireStore.passwordResetEmail(email.value)}
          >
            パスワード設定リンクを送信
          </Text>
        </View>
        <View style={styles.banner}>
          <AdMobBanner
            adUnitID={
              __DEV__
                ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
                : Platform.select({
                    ios: "広告ユニットID", // iOS
                    android: "広告ユニットID", // android
                  })
            }
            onDidFailToReceiveAdWithError={bannerError}
            servePersonalizedAds
            bannerSize="mediumRectangle"
          />
        </View>
      </View>
    </Fragment>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: baseColor.base,
  },
  //パスワード再設定
  passwdChangeWrap: {
    width: wp("95%"),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp("5%"),
  },
  passwdLabel: {
    color: utilityColor.inputLabel,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Small,
    fontWeight: "600",
  },
  passwdInput: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "600",
  },
  submitButton: {
    width: platformIOS.isPad ? wp("65%") : wp("80%"),
    backgroundColor: baseColor.accent,
    paddingVertical: platformIOS.isPad ? hp("2%") : hp("1.5%"),
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Small : Size.Large,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: platformIOS.isPad ? hp("10%") : hp("8%"),
    borderRadius: 6,
    overflow: "hidden",
  },
  banner: {
    marginTop: 50,
    alignItems: "center",
  },
});

export default PasswordReset;
