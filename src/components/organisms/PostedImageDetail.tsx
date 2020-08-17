import React, { FC } from "react";
import { ScrollView, View, Text } from "react-native";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { styles } from "../../styles/postedImageDetail";

type Props = {
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentCount: number;
};

const PostedImageDetail: FC<Props> = ({ ...props }) => {
  const {
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentCount,
  } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* アイコン */}
        <Image
          style={styles.userIcon}
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/users%2F8HG1hZgvW7WiXA1oaaPMyn59ayB2%2Fuser.jpeg?alt=media&token=cb63a15b-d239-4543-9e1c-d45e1932bb98",
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        {/* 画像 */}
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        {/* 時間とかお気に入り数とか */}
        <View>
          <Text>{createTime}</Text>
          <Text>お気に入り数{favoriteNumber}</Text>
          <Text>
            {latitude}:{longitude}
          </Text>
        </View>
        <View>
          <Text>コメント一覧</Text>
          {/* アイコン */}
          <Image
            style={styles.userIcon}
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/users%2F8HG1hZgvW7WiXA1oaaPMyn59ayB2%2Fuser.jpeg?alt=media&token=cb63a15b-d239-4543-9e1c-d45e1932bb98",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PostedImageDetail;
