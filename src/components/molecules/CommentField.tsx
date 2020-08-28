import React, { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/postedImageDetail";
import { displayTime } from "../../utilities/date";
import { Timestamp } from "@google-cloud/firestore";

type Props = {
  postUserName: string;
  postUserImage: string;
  message: string;
  create_time: Timestamp;
};

const CommentField: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, message, create_time } = props;

  return (
    <View style={styles.commentBox}>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.commentData}>
        <Text style={styles.userName}>{postUserName}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{displayTime(create_time.toDate())}</Text>
      </View>
    </View>
  );
};

export default CommentField;
