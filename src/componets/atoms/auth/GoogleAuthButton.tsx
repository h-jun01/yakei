import React, { FC } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "../../../styles/auth";

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
    <View style={styles.twitterBack}>
      <TouchableWithoutFeedback onPress={() => signInWithGoogle()}>
        <Text style={styles.buttonText}>Googleアカウントでログイン</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AuthButton;
