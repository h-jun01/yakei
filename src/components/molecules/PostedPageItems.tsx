import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { styles } from "../../styles/imageList";
import { useDisplayTime } from "../../utilities/hooks/date";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
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

  const date = useDisplayTime(create_time.toDate());

  return (
    <Fragment>
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
          <EvilIcons name="comment" size={21} />
        </Text>
        <Text style={styles.stateNum}>{commentCount}</Text>
        <Text style={styles.PostIcon}>
          <EvilIcons name="location" size={21} />
        </Text>
      </View>
      <Text style={styles.timeStamp}>{date}</Text>
    </Fragment>
  );
};

export default PostedPageItems;
