import React, { FC } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { accountFireStore } from "../firebase/accountFireStore";
import { styles } from "../styles/auth";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

type Props = {
  signUpUser: (args: SignUpData) => void;
  signInWithGoogle: () => Promise<
    | {
        cancelled: boolean;
        error?: undefined;
      }
    | {
        error: boolean;
        cancelled?: undefined;
      }
    | undefined
  >;
  name: UseInput;
  email: UseInput;
  pass: UseInput;
};

const Auth: FC<Props> = ({ ...props }) => {
  const { signUpUser, signInWithGoogle, name, email, pass } = props;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>yakei(仮)</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder="メールアドレスを入力"
            placeholderTextColor="#808080"
            {...email}
          />
        </View>

        <View style={styles.input}>
          <TextInput
            // value={signUpData.name}
            placeholder="ユーザ名を入力"
            placeholderTextColor="#808080"
            {...name}
          />
        </View>

        <View style={styles.input}>
          <TextInput
            // value={signUpData.password}
            secureTextEntry={true}
            placeholder="パスワードを入力"
            placeholderTextColor="#808080"
            {...pass}
          />
        </View>
        <View style={styles.buttonBack}>
          {console.log(email.value)}
          <TouchableWithoutFeedback
            onPress={() =>
              signUpUser({
                name: name.value,
                email: email.value,
                password: pass.value,
              })
            }
          >
            <Text style={styles.buttonText}>新規登録</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>
            登録することで、利用規約及びプライバシーポリシーに同意するものとします。
          </Text>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.borderLeft} />
          <Text style={styles.orText}>または</Text>
          <View style={styles.borderRight} />
        </View>

        <View style={styles.twitterBack}>
          <TouchableWithoutFeedback onPress={() => signInWithGoogle()}>
            <Text style={styles.buttonText}>Googleアカウントでログイン</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.twitterBack}>
          <TouchableWithoutFeedback
            onPress={() =>
              accountFireStore.loginUser({
                email: "",
                password: "",
              })
            }
          >
            <Text style={styles.buttonText}>テストユーザーでログイン</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Auth;
