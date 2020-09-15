import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { useDisplayTime } from "../../utilities/hooks/date";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";

type Props = {
  opponent_name: string;
  content: string;
  create_time: Timestamp;
};

const NotificationText: FC<Props> = ({ ...props }) => {
  const { opponent_name, content, create_time } = props;
  const date = useDisplayTime(create_time.toMillis());

  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.nameSize}>{opponent_name}</Text>
        さんがあなたの写真に
        {content}
        しました。
      </Text>
      <Text style={styles.timeStamp}>{date}</Text>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

export const styles = StyleSheet.create({
  text: {
    width: wp("60%"),
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    color: baseColor.text,
    letterSpacing: 0.8,
    lineHeight: platformIOS.isPad ? 30 : 16,
    paddingHorizontal: wp("4.1%"),
    paddingBottom: platformIOS.isPad ? wp("2%") : wp("2.6%"),
  },
  timeStamp: {
    paddingHorizontal: wp("4.1%"),
    color: baseColor.grayText,
    fontSize: platformIOS.isPad ? Size.Xxsmall : Size.Small,
    fontWeight: "400",
  },
  nameSize: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.NormalL,
    fontWeight: "700",
  },
});

export default NotificationText;
