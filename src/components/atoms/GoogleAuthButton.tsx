import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
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

const AuthButton: FC<Props> = ({ ...props }) => {
  const { signInWithGoogle } = props;
  return (
    <TouchableOpacity
      style={styles.googleBack}
      activeOpacity={0.8}
      onPress={() => signInWithGoogle()}
    >
      <Text style={styles.buttonText}>Googleアカウントでログイン</Text>
    </TouchableOpacity>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  googleBack: {
    backgroundColor: "#DC4E42",
    borderRadius: 5,
    paddingVertical: hp("1.5%"),
    marginBottom: hp("1.5%"),
  },
  buttonText: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Small : Size.Large,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AuthButton;
