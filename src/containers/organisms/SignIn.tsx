import React, { FC, Fragment, useState } from "react";
import * as Google from "expo-google-app-auth";
import Spinner from "react-native-loading-spinner-overlay";
import SignIn from "../../componets/organisms/SignIn";
import { accountFireStore } from "../../firebase/accountFireStore";
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

const ContainerAuth: FC<Props> = ({ navigation }) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const email = useInput("");
  const pass = useInput("");

  const itemList: ItemList[] = [
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
  const signInUser = async () => {
    try {
      accountFireStore.loginUser({ email: email.value, password: pass.value });
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
      <SignIn
        navigation={navigation}
        itemList={itemList}
        signInUser={signInUser}
        signInWithGoogle={signInWithGoogle}
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

export default ContainerAuth;
