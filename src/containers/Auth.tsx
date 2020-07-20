import React, { useState } from "react";
import Auth, { SignUpData } from "../componets/Auth";
import { provider } from "../firebase/firebase";
import { accountFireStore } from "../firebase/accountFireStore";
import { callingAlert } from "../utilities/alert";

const ContainerAuth = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: "",
    name: "",
    password: "",
  });

  //新規登録処理
  const signUpUser = async (args: SignUpData) => {
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REGEX_PASSWORD = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}$/i;
    const url = "https://asia-northeast1-hal-yakei.cloudfunctions.net/signUp";

    try {
      if (!signUpData.email) {
        return callingAlert({
          alertTitle: "エラー",
          alertMessage: "メールドレスを入力してください",
          alertClose: "OK",
          alertStyle: "default",
        });
      } else if (!signUpData.email.match(REGEX_EMAIL)) {
        return callingAlert({
          alertTitle: "エラー",
          alertMessage: "メールドレスの形式が不正です",
          alertClose: "OK",
          alertStyle: "default",
        });
      } else if (!signUpData.name) {
        return callingAlert({
          alertTitle: "エラー",
          alertMessage: "ユーザ名を入力してください",
          alertClose: "OK",
          alertStyle: "default",
        });
      } else if (!signUpData.password.match(REGEX_PASSWORD)) {
        return callingAlert({
          alertTitle: "エラー",
          alertMessage:
            "パスワードは半角英数字を含めた6文字以上で入力してください",
          alertClose: "OK",
          alertStyle: "default",
        });
      } else if (
        (await accountFireStore.providers(signUpData.email)).findIndex(
          (p: string) => p === accountFireStore.authenticationName
        ) !== -1
      ) {
        return callingAlert({
          alertTitle: "エラー",
          alertMessage: "既に登録済みのメールアドレスです",
          alertClose: "OK",
          alertStyle: "default",
        });
      }

      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          displayName: args.name,
          email: args.email,
          password: args.password,
        }),
      })
        .then((res) => {
          accountFireStore.loginUser({
            email: args.email,
            password: args.password,
          });
          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  const signUpTwitterUser = async () => {
    await accountFireStore.signUpTwitterRedirect(provider).then((user) => {
      console.log(user);
    });
  };

  return (
    <Auth
      signUpData={signUpData}
      setSignUpData={setSignUpData}
      signUpUser={signUpUser}
      signUpTwitterUser={signUpTwitterUser}
    />
  );
};

export default ContainerAuth;
