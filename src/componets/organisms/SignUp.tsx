import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/auth";
import FormInput from "../atoms/auth/FormInput";
import ServiceTitle from "../atoms/auth/ServiceTitle";
import AuthButton from "../atoms/auth/AuthButton";
import AuthChoiceText from "../atoms/auth/AuthChoiceText";
import AuthStatusChange from "../atoms/auth/AuthStatusChange";

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
  name: UseInput;
  email: UseInput;
  pass: UseInput;
  itemList: ItemList[];
  signUpUser: () => void;
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
  const { navigation, itemList, signUpUser, signInWithGoogle } = props;

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.box}>
          <ServiceTitle />
          {itemList.map((item, index) => (
            <FormInput
              key={index}
              item={item.item}
              placeholder={item.placeholder}
              secureTextEntry={item.secureTextEntry}
              signUpUserData={item.signUpUserData}
            />
          ))}
          <View style={styles.buttonBack}>
            <AuthButton label="新規登録" onPressFunction={signUpUser} />
          </View>
          <View style={styles.text}>
            <Text style={styles.textColor}>
              登録することで、利用規約及びプライバシーポリシーに同意するものとします。
            </Text>
          </View>
          <AuthChoiceText />
          <View style={styles.twitterBack}>
            <AuthButton
              label="Googleアカウントでログイン"
              onPressFunction={signInWithGoogle}
            />
          </View>
        </View>
      </View>
      <AuthStatusChange
        text="既にアカウントをお持ちの場合、ログインはこちら"
        navigation={() => navigation.navigate("SignIn")}
      />
    </Fragment>
  );
};

export default SignUp;
