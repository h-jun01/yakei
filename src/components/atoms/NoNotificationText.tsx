import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
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
    paddingBottom: hp("9%"),
  },
  noNotification: {
    width: deviceWidth / 1.3,
    alignItems: "center",
  },
  noNotificationText: {
    fontSize: Size.noNotificationSize,
    color: baseColor.text,
  },
  supplement: {
    marginTop: hp("4%"),
    color: "#ddd",
  },
});

export default NoNotificationText;
