import React, { FC } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { styles } from "../styles/auth";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

type Props = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  signUpUser: (args: UserData) => void;
};

const Auth: FC<Props> = ({ ...props }) => {
  const { userData, setUserData, signUpUser } = props;

  return (
    <View style={styles.lap}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>yakei(仮)</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.email}
            placeholder="メールアドレスを入力"
            placeholderTextColor="#808080"
            onChangeText={(email) =>
              setUserData((prevState) => ({ ...prevState, email: email }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.name}
            placeholder="ユーザ名を入力"
            placeholderTextColor="#808080"
            onChangeText={(name) =>
              setUserData((prevState) => ({ ...prevState, name: name }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.password}
            secureTextEntry={true}
            placeholder="パスワードを入力"
            placeholderTextColor="#808080"
            onChangeText={(password) =>
              setUserData((prevState) => ({ ...prevState, password: password }))
            }
          />
        </View>
        <View style={styles.buttonBack}>
          <TouchableWithoutFeedback
            onPress={() =>
              signUpUser({
                name: userData.name,
                email: userData.email,
                password: userData.password,
              })
            }
          >
            <Text style={styles.buttonText}>登録</Text>
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
          <TouchableWithoutFeedback>
            <Text style={styles.buttonText}>Twitterでログイン</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Auth;
