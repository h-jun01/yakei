import React, { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/postedImageDetail";

type Props = {
  postUserName: string;
  postUserImage: string;
  message: string;
  createTime: string;
};

const CommentField: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, message, createTime } = props;

  return (
    <View>
      <Text>{postUserName}</Text>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>{message}</Text>
      <Text>{createTime}</Text>
    </View>
  );
};

export default CommentField;
