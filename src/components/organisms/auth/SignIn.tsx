import React, { FC, Fragment } from "react";
import { View, ImageBackground, Image } from "react-native";
import { UseInputResult } from "../../../utilities/hooks/input";
import { styles } from "../../../styles/auth/auth";
import FormInput from "../../atoms/auth/FormInput";
import ServiceTitle from "../../atoms/auth/ServiceTitle";
import GoogleAuthButton from "../../atoms/auth/GoogleAuthButton";
import AuthChoiceText from "../../atoms/auth/AuthChoiceText";
import AuthStatusChange from "../../atoms/auth/AuthStatusChange";
import AuthScreenButton from "../../atoms/auth/AuthScreenButton";
import ForgotPassword from "../../atoms/auth/ForgotPassword";

type ItemList = {
  item: string;
  placeholder: string;
  secureTextEntry: boolean;
  signUpUserData: UseInputResult;
};

type Props = {
  navigation: any;
  itemList: ItemList[];
  email: UseInputResult;
  pass: UseInputResult;
  signInUser: (email: string, password: string) => void;
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

const SignIn: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    itemList,
    email,
    pass,
    signInUser,
    signInWithGoogle,
  } = props;

  return (
    <Fragment>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/authBackImg.jpg")}
          style={styles.authBack}
        >
          <View style={styles.allWrap}>
            {/* ロゴ */}
            <ServiceTitle />
            <View style={styles.authWrap}>
              {/* 入力フォーム */}
              {itemList.map((item, index) => (
                <FormInput
                  key={index}
                  item={item.item}
                  placeholder={item.placeholder}
                  secureTextEntry={item.secureTextEntry}
                  signUpUserData={item.signUpUserData}
                />
              ))}
              {/* 新規登録とログインボタン */}
              <AuthScreenButton
                label="ログイン"
                authFunction={() => signInUser(email.value, pass.value)}
              />
              {/* パスワードお忘れですか */}
              <ForgotPassword navigation={navigation} />
              {/* またはのとこ */}
              <AuthChoiceText />
              {/* Google認証ボタン */}
              <GoogleAuthButton signInWithGoogle={signInWithGoogle} />
            </View>
          </View>
          {/* ログインか新規登録に切り替え */}
          <View style={styles.authChangeWrap}>
            <AuthStatusChange
              text="アカウントをお持ちでない場合、新規登録はこちら"
              navigation={() => navigation.navigate("signUp")}
            />
          </View>
        </ImageBackground>
      </View>
    </Fragment>
  );
};

export default SignIn;
