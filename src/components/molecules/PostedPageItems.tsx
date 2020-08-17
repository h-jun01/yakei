import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/imageList";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
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
  } = props;
  return (
    <View style={styles.postItem}>
      <Text>
        <EvilIcons name="heart" size={20} />
      </Text>
      <Text>{favoriteNumber}</Text>
      <Text
        onPress={() =>
          navigation.navigate("post", {
            photo_id,
            uid,
            createTime,
            url,
            favoriteNumber,
            latitude,
            longitude,
          })
        }
      >
        <EvilIcons name="comment" size={20} />
      </Text>
      <Text>0</Text>
      <Text>
        <EvilIcons name="location" size={20} />
      </Text>
    </View>
  );
};

export default PostedPageItems;
