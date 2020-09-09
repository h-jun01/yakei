import React, { FC } from "react";
import { View, Text,StyleSheet } from "react-native";
import { accountFireStore } from "../../firebase/accountFireStore";
import { useInput } from "../../utilities/hooks/input";
import { Hoshi } from "react-native-textinput-effects";
import { Size } from '../../styles/thema/fonts'
import { baseColor, utilityColor } from '../../styles/thema/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const PasswordReset: FC = () => {
  const email = useInput("");
  return (
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
          {...email}
          label={"メールアドレスを入力 "}
          borderColor={"#202840"}
          inputPadding={wp("2.5%")}
          inputStyle={styles.passwdInput}
          labelStyle={styles.passwdLabel}
        />
        <Text
          style={styles.submitButton}
          onPress={() => accountFireStore.passwordResetEmail(email.value)}
        >
          パスワード設定リンクを送信
        </Text>
      </View>
    </View>
  );
};

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
    fontSize: Size.Small,
    fontWeight: "600",
  },
  passwdInput: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "600",
  },
  submitButton: {
    width: wp("80%"),
    backgroundColor: baseColor.accent,
    paddingVertical: hp("1.5%"),
    color: baseColor.text,
    fontSize: Size.Large,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: hp("8%"),
    borderRadius: 6,
    overflow: "hidden",
  },
});

export default PasswordReset;
