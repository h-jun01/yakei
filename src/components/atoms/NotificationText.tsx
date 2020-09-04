import React, { FC } from "react";
import { View, Text } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { useDisplayTime } from "../../utilities/hooks/date";
import { styles } from "../../styles/notification";

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

export default NotificationText;
