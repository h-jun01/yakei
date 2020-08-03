import React, { FC, Fragment, useState } from "react";
import * as Google from "expo-google-app-auth";
import Spinner from "react-native-loading-spinner-overlay";
import Auth from "../../componets/organisms/SignUp";
import { accountFireStore } from "../../firebase/accountFireStore";
import { callingAlert } from "../../utilities/alert";
import { useInput } from "../../utilities/hooks/input";

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type UseInput = {
  value: string;
  onChangeText: (val: string) => void;
};

type ItemList = {
  item: string;
  placeholder: string;
  secureTextEntry: boolean;
  signUpUserData: UseInput;
};

type Props = {
  navigation: any;
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

  //エンドポイント
  const url = "https://asia-northeast1-hal-yakei.cloudfunctions.net/signUp";

  //新規登録処理
  const signUpUser = async () => {
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REGEX_PASSWORD = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}$/i;

    try {
      if (!email.value) {
        callingAlert("メールアドレスを入力してください");
        return;
      } else if (email.value.match(REGEX_EMAIL)) {
        callingAlert("メールドレスの形式が不正です");
        return;
      } else if (name.value) {
        callingAlert("ユーザ名を入力してください");
        return;
      } else if (pass.value.match(REGEX_PASSWORD)) {
        callingAlert(
          "パスワードは半角英数字を含めた6文字以上で入力してください"
        );
        return;
      } else if (
        (await accountFireStore.providers(email.value)).findIndex(
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
          displayName: name.value,
          email: email.value,
          password: pass.value,
        }),
      })
        .then(async () => {
          await accountFireStore.loginUser({
            email: email.value,
            password: pass.value,
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
        androidClientId:
          "655737634399-lklkkiauc2cgm6rcmvlrfn1bhnvijhkf.apps.googleusercontent.com",
        iosClientId:
          "655737634399-10b4vips3mpdkht5kdsol7dskcmuqjkb.apps.googleusercontent.com",
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
          setIsLoading(true);
          accountFireStore.loginUser({
            email: result.user.email as string,
            password: result.user.id as string,
          });
        } else {
          setIsLoading(true);
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
            .then(() => {
              accountFireStore.loginUser({
                email: result.user.email as string,
                password: result.user.id as string,
              });
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
