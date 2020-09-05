import React, { FC } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { deviceWidth } from "../../utilities/dimensions";

const NoNotificationText: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noNotification}>
        <Text style={styles.noNotificationText}>
          通知はまだ届いていません。
        </Text>
        <Text style={styles.supplement}>
          あなたの写真にコメントやいいねされたときにお知らせがこちらに表示されます。
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: baseColor.base,
    paddingBottom: 70,
  },
  noNotification: {
    width: deviceWidth / 1.3,
    alignItems: "center",
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
