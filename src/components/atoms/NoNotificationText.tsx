import React, { FC } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";

const NoNotificationText: FC = () => {
  return (
    <View style={styles.noNotification}>
      <Text style={styles.noNotificationText}>通知はまだ届いていません。</Text>
      <Text style={styles.supplement}>
        あなたの写真にコメントやいいねされたときにお知らせがこちらに表示されます。
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  noNotification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: deviceWidth / 1.3,
    paddingBottom: 30,
  },
  noNotificationText: {
    fontSize: 22,
    color: "#fff",
  },
  supplement: {
    marginTop: 30,
    color: "#ddd",
  },
});

export default NoNotificationText;
