import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../../styles/user/setting";
import { accountFireStore } from "../../../firebase/accountFireStore";
import { useInput } from "../../../utilities/hooks/input";

const PasswordReset: FC = () => {
  const email = useInput("");
  return (
    <View style={styles.container}>
      <TextInput placeholder="メールアドレスを入力" {...email} />
      <Text onPress={() => accountFireStore.passwordResetEmail(email.value)}>
        メール送信テスト
      </Text>
    </View>
  );
};

export default PasswordReset;
