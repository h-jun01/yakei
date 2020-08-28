import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/imageList";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentCount: number;
};

const PostedPageItems: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentCount,
  } = props;

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
            create_time,
            url,
            favoriteNumber,
            latitude,
            longitude,
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
