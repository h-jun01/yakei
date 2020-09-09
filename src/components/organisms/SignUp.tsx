import React, { FC, Fragment } from "react";
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
import Precautions from "../atoms/Precautions";
import AuthButton from "../atoms/AuthButton";

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
                label="新規登録"
                handleAuth={() =>
                  signUpUser(name.value, email.value, pass.value)
                }
              />
              <SelectedText />
              <GoogleAuthButton signInWithGoogle={signInWithGoogle} />
              <Precautions navigation={navigation} />
            </View>
          </View>
          <AuthSwitching
            switchingText="既にアカウントをお持ちの場合、ログインはこちら"
            navigation={() => navigation.navigate("signIn")}
          />
        </ImageBackground>
      </View>
    </Fragment>
  );
};

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
  },
  allWrap: {
    width: deviceWidth,
    position: "absolute",
    top: hp("16%"),
  },
  authWrap: {
    width: wp("90%"),
    marginLeft: "auto",
    marginRight: "auto",
    padding: hp("3%"),
    backgroundColor: utilityColor.inputBack,
    borderRadius: 10,
  },
});

export default SignUp;
