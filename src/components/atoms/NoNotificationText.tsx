import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
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

const platformIOS = Platform as PlatformIOSStatic;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: baseColor.base,
    paddingBottom: hp("9%"),
  },
  noNotification: {
    width: platformIOS.isPad ? deviceWidth / 1.6 : deviceWidth / 1.3,
    alignItems: "center",
  },
  noNotificationText: {
    fontSize: platformIOS.isPad ? Size.Large : Size.noNotificationSize,
    color: baseColor.text,
  },
  supplement: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    marginTop: hp("4%"),
    color: "#ddd",
  },
});

export default NoNotificationText;
