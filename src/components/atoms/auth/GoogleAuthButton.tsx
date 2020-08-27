import React, { FC } from "react";
import { Text, TouchableHighlight } from "react-native";
import { styles } from "../../../styles/auth/auth";

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
    <TouchableHighlight
      style={styles.googleBack}
      underlayColor={"#CC4E42"}
      onPress={() => signInWithGoogle()}
    >
      <Text style={styles.buttonText}>Googleアカウントでログイン</Text>
    </TouchableHighlight>
  );
};

export default AuthButton;
