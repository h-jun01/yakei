import React, { FC } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { accountFireStore } from "../firebase/accountFireStore";
import { styles } from "../styles/auth";

export type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  signUpData: SignUpData;
  setSignUpData: React.Dispatch<React.SetStateAction<SignUpData>>;
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
};

const Auth: FC<Props> = ({ ...props }) => {
  const { signUpData, setSignUpData, signUpUser, signInWithGoogle } = props;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>yakei(仮)</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            value={signUpData.email}
            placeholder="メールアドレスを入力"
            placeholderTextColor="#808080"
            onChangeText={(email) =>
              setSignUpData((prevState) => ({ ...prevState, email: email }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={signUpData.name}
            placeholder="ユーザ名を入力"
            placeholderTextColor="#808080"
            onChangeText={(name) =>
              setSignUpData((prevState) => ({ ...prevState, name: name }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={signUpData.password}
            secureTextEntry={true}
            placeholder="パスワードを入力"
            placeholderTextColor="#808080"
            onChangeText={(password) =>
              setSignUpData((prevState) => ({
                ...prevState,
                password: password,
              }))
            }
          />
        </View>
        <View style={styles.buttonBack}>
          <TouchableWithoutFeedback
            onPress={() =>
              signUpUser({
                name: signUpData.name,
                email: signUpData.email,
                password: signUpData.password,
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
                email: "test@gmail.com",
                password: "123456a",
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
