import React, { FC, Fragment } from "react";
import { View, ImageBackground } from "react-native";
import { UseInputResult } from "../../../utilities/hooks/input";
import { styles } from "../../../styles/auth/auth";
import FormInput from "../../atoms/auth/FormInput";
import ServiceTitle from "../../atoms/auth/ServiceTitle";
import GoogleAuthButton from "../../atoms/auth/GoogleAuthButton";
import AuthChoiceText from "../../atoms/auth/AuthChoiceText";
import AuthStatusChange from "../../atoms/auth/AuthStatusChange";
import SginUpScreenText from "../../atoms/auth/SginUpScreenText";
import AuthScreenButton from "../../atoms/auth/AuthScreenButton";

type ItemList = {
  item: string;
  placeholder: string;
  secureTextEntry: boolean;
  signUpUserData: UseInputResult;
};

type Props = {
  navigation: any;
  itemList: ItemList[];
  name: UseInputResult;
  email: UseInputResult;
  pass: UseInputResult;
  signUpUser: (name: string, email: string, password: string) => void;
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

const SignUp: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    name,
    email,
    pass,
    itemList,
    signUpUser,
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
                label="新規登録"
                authFunction={() =>
                  signUpUser(name.value, email.value, pass.value)
                }
              />
              {/* またはのとこ */}
              <AuthChoiceText />
              {/* Google認証ボタン */}
              <GoogleAuthButton signInWithGoogle={signInWithGoogle} />
              {/* 利用規約とプラポリ */}
              <SginUpScreenText navigation={navigation} />
            </View>
          </View>
          {/* ログインか新規登録に切り替え */}
          <View style={styles.authChangeWrap}>
            <AuthStatusChange
              text="既にアカウントをお持ちの場合、ログインはこちら"
              navigation={() => navigation.navigate("ログイン")}
            />
          </View>
        </ImageBackground>
      </View>
    </Fragment>
  );
};

export default SignUp;
