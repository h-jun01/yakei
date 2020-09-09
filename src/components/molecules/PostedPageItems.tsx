import React, { FC, Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { styles } from "../../styles/imageList";
import { iconSize } from "../../styles/thema/fonts";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  date: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentCount: number;
  isFavoriteStatus: boolean;
  pressedFavorite: () => Promise<void>;
};

const PostedPageItems: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    date,
    favoriteNumber,
    latitude,
    longitude,
    commentCount,
    isFavoriteStatus,
    pressedFavorite,
  } = props;

  return (
    <Fragment>
      <View style={styles.postItem}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchableOpacity}
          onPress={() => pressedFavorite()}
        >
          <Text style={styles.PostIcon}>
            {isFavoriteStatus ? (
              <AntDesign name="heart" size={iconSize.Small} color="#E0245E" />
            ) : (
              <AntDesign name="hearto" size={iconSize.Small} />
            )}
          </Text>
          <Text style={styles.stateNum}>{favoriteNumber}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchableOpacity}
          onPress={() =>
            navigation.navigate("post", {
              imageData: {
                photo_id,
                uid,
                create_time,
                url,
                favoriteNumber,
                latitude,
                longitude,
              },
            })
          }
        >
          <Text style={styles.PostIcon}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={iconSize.Small}
            />
          </Text>
          <Text style={styles.stateNum}>{commentCount}</Text>
        </TouchableOpacity>
        <Text style={styles.PostIcon}>
          <EvilIcons name="location" size={iconSize.NormalS} />
        </Text>
      </View>
      <Text style={styles.timeStamp}>{date}</Text>
    </Fragment>
  );
};

export default PostedPageItems;
