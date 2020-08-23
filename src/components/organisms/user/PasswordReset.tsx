import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../../styles/user/setting";
import { accountFireStore } from "../../../firebase/accountFireStore";
import { useInput } from "../../../utilities/hooks/input";
import { Jiro } from "react-native-textinput-effects";

const PasswordReset: FC = () => {
  const email = useInput("");
  return (
    <View style={styles.container}>
      <View style={styles.passwdChangeWrap}>
        <Text style={styles.intro}>パスワード再設定用のメールを送信します</Text>
        <Jiro
          //先頭文字を大文字にしない
          autoCapitalize={"none"}
          //キーボードの設定
          keyboardType="email-address"
          returnKeyType="done"
          blurOnSubmit={true}
          placeholder=""
          {...email}
          label={"メールアドレスを入力 "}
          borderColor={"#21A6B8"}
          inputPadding={14}
          style={styles.jiro}
          inputStyle={styles.passwdInput}
          labelStyle={styles.passwdLabel}
        />
        <Text
          style={styles.submitButton}
          onPress={() => accountFireStore.passwordResetEmail(email.value)}
        >
          メールを送信する
        </Text>
      </View>
    </View>
  );
};

export default PasswordReset;
