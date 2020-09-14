import React, { FC, Fragment } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, ImageBackground, StyleSheet } from "react-native";
import { UseInputResult } from "../../utilities/hooks/input";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { deviceWidth } from "../../utilities/dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputForm from "../atoms/InputForm";
import ServiceTitle from "../atoms/ServiceTitle";
import GoogleAuthButton from "../atoms/GoogleAuthButton";
import SelectedText from "../atoms/SelectedText";
import AuthSwitching from "../atoms/AuthSwitching";
import AuthButton from "../atoms/AuthButton";
import ForgotPassword from "../atoms/ForgotPassword";

type ItemList = {
  item: string;
  placeholder: string;
  maxLength: number;
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
          source={require("../../../assets/authBackImg.jpg")}
          style={styles.authBack}
        >
          <View style={styles.allWrap}>
            <ServiceTitle />
            <View style={styles.authWrap}>
              {itemList.map((item, index) => (
                <InputForm
                  key={index}
                  item={item.item}
                  placeholder={item.placeholder}
                  maxLength={item.maxLength}
                  secureTextEntry={item.secureTextEntry}
                  signUpUserData={item.signUpUserData}
                />
              ))}
              <AuthButton
                label="ログイン"
                handleAuth={() => signInUser(email.value, pass.value)}
              />
              <ForgotPassword navigation={navigation} />
              <SelectedText />
              <GoogleAuthButton signInWithGoogle={signInWithGoogle} />
            </View>
          </View>
          <AuthSwitching
            switchingText="アカウントをお持ちでない場合、新規登録はこちら"
            navigation={() => navigation.navigate("signUp")}
          />
        </ImageBackground>
      </View>
    </Fragment>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  authBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // paddingBottom: hp("5%"),
  },
  allWrap: {
    width: deviceWidth,
    position: "absolute",
    top: platformIOS.isPad ? hp("14%") : hp("16%"),
  },
  authWrap: {
    width: platformIOS.isPad ? wp("70%") : wp("90%"),
    marginLeft: "auto",
    marginRight: "auto",
    padding: platformIOS.isPad ? hp("3.5%") : hp("3%"),
    backgroundColor: utilityColor.inputBack,
    borderRadius: 10,
  },
});

export default SignIn;
