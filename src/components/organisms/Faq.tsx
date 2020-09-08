import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import FaqHeading from "../atoms/FaqHeading";

const Faq: FC = () => {
  return (
    <View>
      <FaqHeading heading="登録しているメールアドレスを変更したい" />
      <FaqHeading heading="登録しているパスワードを変更したい" />
      <FaqHeading heading="パスワード変更時にメールが届きません" />
      <FaqHeading heading="YAKEIを退会したい" />
      <FaqHeading heading="投稿写真を保存するにはどのようにすればいいですか？" />
      <FaqHeading heading="スポットとはなんですか？" />
      <FaqHeading heading="ピックアップとはなんですか？" />
    </View>
  );
};

export default Faq;
