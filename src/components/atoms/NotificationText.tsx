import React, { FC } from "react";
import { View, Text } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { useDisplayTime } from "../../utilities/hooks/date";
import { StyleSheet } from "react-native";
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

export const styles = StyleSheet.create({
  text: {
    width: 230,
    color: "#fff",
    letterSpacing: 0.8,
    lineHeight: 16,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 10,
  },
  timeStamp: {
    paddingLeft: 17,
    paddingRight: 17,
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  nameSize: {
    fontSize: 15,
    fontWeight: "700",
  },
});

export default NotificationText;
