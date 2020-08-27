import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import PostedPageItems from "./PostedPageItems";

type CommentData = {
  name: string;
  image: string;
  comment: string;
  createTime: string;
};

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  comment_list: CommentData[];
};

type Props = {
  photoDataList: PhotoDataList[];
  navigation: any;
};

const ImageList: FC<Props> = ({ ...props }) => {
  const { photoDataList, navigation } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        {photoDataList.map((item, index) => (
          <View style={styles.itemWrap} key={index}>
            <InformationUserPosted
              create_time={item.create_time}
              uid={item.uid}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("post", {
                  photo_id: item.photo_id,
                  uid: item.uid,
                  create_time: item.create_time,
                  url: item.url,
                  favoriteNumber: item.favoriteNumber,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  comment_list: item.comment_list,
                })
              }
            >
              <Image
                style={styles.imageSize}
                source={{ uri: item.url }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableOpacity>
            <PostedPageItems
              navigation={navigation}
              photo_id={item.photo_id}
              uid={item.uid}
              create_time={item.create_time}
              url={item.url}
              favoriteNumber={item.favoriteNumber}
              latitude={item.latitude}
              longitude={item.longitude}
              comment_list={item.comment_list}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageList;
