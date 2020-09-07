import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import HelpHeading from "../atoms/HelpHeading";

const Help: FC = () => {
  return (
    <View style={styles.container}>
      <HelpHeading heading="注意事項" />
      <Text>・他人の写真をYAKEIに投稿してはいけません。</Text>
      <HelpHeading heading="よくある質問" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Help;
