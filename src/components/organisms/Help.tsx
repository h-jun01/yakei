import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import HelpHeading from "../atoms/HelpHeading";

const Help: FC = () => {
  return (
    <View style={styles.container}>
      <HelpHeading heading="注意事項" />
      <Text>・他人の写真をYAKEIに投稿してはいけません。</Text>
      <Text>
        ・掲載されている他人の作品をブログやサイト等に無断で転載してはいけません。
      </Text>
      <Text>・無差別な商業用の宣伝行為をしてはいけません</Text>
      <Text>
        ・ 他の利用者に対して誹謗・中傷・プライバシーの侵害をしてはいけません
      </Text>
      <HelpHeading heading="よくある質問" />
      <Text style={styles.questionText}>
        登録しているメールアドレスを変更したい
      </Text>
      <Text style={styles.questionText}>
        登録しているパスワードを変更したい
      </Text>
      <Text style={styles.questionText}>
        パスワード変更時にメールが届きません
      </Text>
      <Text style={styles.questionText}>YAKEIを退会したい</Text>
      <Text style={styles.questionText}>
        投稿写真を保存するにはどのようにすればいいですか？
      </Text>
      <Text style={styles.questionText}>スポットとはなんですか？</Text>
      <Text style={styles.questionText}>ピックアップとはなんですか？</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionText: {
    color: "#1D89C6",
  },
});

export default Help;
