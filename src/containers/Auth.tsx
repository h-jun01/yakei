import React, { useState } from "react";
import Auth, { SignUpData } from "../componets/Auth";
import { accountFireStore } from "../firebase/accountFireStore";
import { callingAlert } from "../utilities/alert";
import * as Google from "expo-google-app-auth";
import { Alert } from "react-native";

const ContainerAuth = () => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    email: "",
    name: "",
    password: "",
  });

  //エンドポイント
  const url = "https://asia-northeast1-hal-yakei.cloudfunctions.net/signUp";

  //新規登録処理
  const signUpUser = async (args: SignUpData) => {
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REGEX_PASSWORD = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}$/i;

    try {
      if (!signUpData.email) {
        callingAlert("メールアドレスを入力してください");
        return;
      } else if (!signUpData.email.match(REGEX_EMAIL)) {
        callingAlert("メールドレスの形式が不正です");
        return;
      } else if (!signUpData.name) {
        callingAlert("ユーザ名を入力してください");
        return;
      } else if (!signUpData.password.match(REGEX_PASSWORD)) {
        callingAlert(
          "パスワードは半角英数字を含めた6文字以上で入力してください"
        );
        return;
      } else if (
        (await accountFireStore.providers(signUpData.email)).findIndex(
          (p: string) => p === accountFireStore.authenticationName
        ) !== -1
      ) {
        callingAlert("既に登録済みのメールアドレスです");
        return;
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

  //Google認証処理
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "",
        iosClientId: "",
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        if (
          (
            await accountFireStore.providers(result.user.email as string)
          ).findIndex(
            (p: string) => p === accountFireStore.authenticationName
          ) !== -1
        ) {
          accountFireStore.loginUser({
            email: result.user.email as string,
            password: result.user.id as string,
          });
        } else {
          fetch(url, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              displayName: result.user.name,
              email: result.user.email,
              password: result.user.id,
            }),
          })
            .then((res) => {
              accountFireStore.loginUser({
                email: result.user.email as string,
                password: result.user.id as string,
              });
              return res.json();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <Auth
      signUpData={signUpData}
      setSignUpData={setSignUpData}
      signUpUser={signUpUser}
      signInWithGoogle={signInWithGoogle}
    />
  );
};

export default ContainerAuth;
