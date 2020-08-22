import React, { FC } from "react";
import { ScrollView, View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import PostedPageItems from "../../components/molecules/PostedPageItems";

type CommentData = {
  name: string;
  image: string;
  comment: string;
  createTime: string;
};

type PhotoDataList = {
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentList: CommentData[];
};

type Props = {
  photoDataList: PhotoDataList[];
  navigation: any;
};

const ImageList: FC<Props> = ({ ...props }) => {
  const { photoDataList, navigation } = props;

  return (
    <ScrollView style={styles.container}>
      <View>
        {photoDataList.map((item, index) => (
          <View style={styles.allWrap} key={index}>
            <InformationUserPosted
              createTime={item.createTime}
              uid={item.uid}
            />
            <Image
              style={styles.imageSize}
              source={{ uri: item.url }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <PostedPageItems
              navigation={navigation}
              photo_id={item.photo_id}
              uid={item.uid}
              createTime={item.createTime}
              url={item.url}
              favoriteNumber={item.favoriteNumber}
              latitude={item.latitude}
              longitude={item.longitude}
              commentList={item.commentList}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageList;
