import React, { FC, Fragment, useState } from "react";
import * as Google from "expo-google-app-auth";
import Spinner from "react-native-loading-spinner-overlay";
import env from "../../../env.json";
import SignIn from "../../components/organisms/SignIn";
import { accountFireStore } from "../../firebase/accountFireStore";
import { useInput } from "../../utilities/hooks/input";
import { callingAlert } from "../../utilities/alert";

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

type ItemList = {
  item: string;
  placeholder: string;
  maxLength: number;
  secureTextEntry: boolean;
  signUpUserData: UseInput;
};

type Props = {
  navigation: any;
};

const ContainerAuth: FC<Props> = ({ navigation }) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const email = useInput("");
  const pass = useInput("");

  const itemList: ItemList[] = [
    {
      item: "メールアドレス",
      placeholder: "メールアドレスを入力",
      secureTextEntry: false,
      maxLength: 255,
      signUpUserData: email,
    },
    {
      item: "パスワード",
      placeholder: "6文字以上の半角英数字",
      secureTextEntry: true,
      maxLength: 255,
      signUpUserData: pass,
    },
  ];

  //ログイン処理
  const signInUser = async (email: string, password: string) => {
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REGEX_PASSWORD = /^([a-zA-Z0-9]{6,})$/;
    try {
      if (!email) {
        callingAlert("メールアドレスを入力してください");
        return;
      } else if (!email.match(REGEX_EMAIL)) {
        callingAlert("メールドレスの形式が不正です");
        return;
      } else if (!password.match(REGEX_PASSWORD)) {
        callingAlert("パスワードは6文字以上の半角英数字で入力してください");
        return;
      }
      await accountFireStore.loginUser(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  //Google認証処理
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: env.ANDROID_CLIENT_ID,
        iosClientId: env.IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });
      setIsLoading(true);
      if (result.type === "success") {
        await accountFireStore.loginGoogleUser(
          result.idToken as string,
          result.accessToken as string
        );
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return {
        error: true,
      };
    }
  };

  return (
    <Fragment>
      <SignIn
        navigation={navigation}
        itemList={itemList}
        email={email}
        pass={pass}
        signInUser={signInUser}
        signInWithGoogle={signInWithGoogle}
      />
      <Spinner
        visible={isloading}
        textContent="読み込み中..."
        textStyle={{
          color: "#fff",
          fontSize: 13,
        }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Fragment>
  );
};

export default ContainerAuth;
