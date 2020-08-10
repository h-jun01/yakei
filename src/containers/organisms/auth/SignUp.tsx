import React, { FC, Fragment, useState } from "react";
import * as Google from "expo-google-app-auth";
import Spinner from "react-native-loading-spinner-overlay";
import Auth from "../../../components/organisms/auth/SignUp";
import { accountFireStore } from "../../../firebase/accountFireStore";
import { callingAlert } from "../../../utilities/alert";
import { useInput, UseInputResult } from "../../../utilities/hooks/input";
import { StackParamList } from "../../../ScreenSwitcher";

type ItemList = {
  item: string;
  placeholder: string;
  secureTextEntry: boolean;
  signUpUserData: UseInputResult;
};

type Props = {
  navigation: StackParamList;
};

const ContainerSignUp: FC<Props> = ({ navigation }) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const name = useInput("");
  const email = useInput("");
  const pass = useInput("");

  const itemList: ItemList[] = [
    {
      item: "ユーザー名",
      placeholder: "2文字〜6文字以内",
      secureTextEntry: false,
      signUpUserData: name,
    },
    {
      item: "メールアドレス",
      placeholder: "メールアドレスを入力",
      secureTextEntry: false,
      signUpUserData: email,
    },
    {
      item: "パスワード",
      placeholder: "6文字以上の半角英数字",
      secureTextEntry: true,
      signUpUserData: pass,
    },
  ];

  //新規登録処理
  const signUpUser = async (name: string, email: string, password: string) => {
    //エンドポイント
    const url = "https://asia-northeast1-hal-yakei.cloudfunctions.net/signUp";
    const REGEX_NAME = /^.{2,6}$/;
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REGEX_PASSWORD = /^([a-zA-Z0-9]{6,})$/;

    try {
      if (!name) {
        callingAlert("ユーザ名を入力してください");
        return;
      } else if (!name.match(REGEX_NAME)) {
        callingAlert("ユーザ名は2〜6文字以内で入力してください");
        return;
      } else if (!email) {
        callingAlert("メールアドレスを入力してください");
        return;
      } else if (!email.match(REGEX_EMAIL)) {
        callingAlert("メールドレスの形式が不正です");
        return;
      } else if (!password.match(REGEX_PASSWORD)) {
        callingAlert("パスワードは6文字以上の半角英数字で入力してください");
        return;
      } else if (
        (await accountFireStore.providers(email)).findIndex(
          (p: string) => p === accountFireStore.authenticationName
        ) !== -1
      ) {
        callingAlert("既に登録済みのメールアドレスです");
        return;
      }

      setIsLoading(true);

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          displayName: name,
          email: email,
          password: password,
        }),
      })
        .then(async () => {
          await accountFireStore.loginUser({
            email: email,
            password: password,
          });
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  //Google認証処理
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "",
        iosClientId: "",
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
      return { error: true };
    }
  };

  return (
    <Fragment>
      <Auth
        navigation={navigation}
        signUpUser={signUpUser}
        signInWithGoogle={signInWithGoogle}
        name={name}
        email={email}
        pass={pass}
        itemList={itemList}
      />
      <Spinner
        visible={isloading}
        textContent="読み込み中..."
        textStyle={{ color: "#fff", fontSize: 13 }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Fragment>
  );
};

export default ContainerSignUp;
