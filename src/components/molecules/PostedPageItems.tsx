import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/imageList";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type CommentData = {
  name: string;
  image: string;
  comment: string;
  createTime: string;
};

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentList: CommentData[];
};

const PostedPageItems: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentList,
  } = props;

  const commentCount: number = commentList.length;

  return (
    <View style={styles.postItem}>
      <Text style={styles.PostIcon}>
        <EvilIcons name="heart" size={21} />
      </Text>
      <Text style={styles.stateNum}>{favoriteNumber}</Text>
      <Text
        style={styles.PostIcon}
        onPress={() =>
          navigation.navigate("post", {
            photo_id,
            uid,
            createTime,
            url,
            favoriteNumber,
            latitude,
            longitude,
            // commentList,
          })
        }
      >
        <EvilIcons name="comment" size={20} />
      </Text>
      <Text style={styles.stateNum}>{commentCount}</Text>
      <Text style={styles.PostIcon}>
        <EvilIcons name="location" size={20} />
      </Text>
    </View>
  );
};

export default PostedPageItems;
