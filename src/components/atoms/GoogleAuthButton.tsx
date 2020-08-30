import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/auth/auth";

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

export default AuthButton;
