import React, { FC } from "react";
import { ScrollView, View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  name: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
};

type Props = {
  photoDataList: PhotoDataList[];
  navigation: any;
};

const ImageList: FC<Props> = ({ ...props }) => {
  const { photoDataList, navigation } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        {photoDataList.map((item, index) => (
          // <Text
          //   key={index}
          //   onPress={() =>
          //     navigation.navigate("post", {
          //       photo_id: item.photo_id,
          //       uid: item.uid,
          //       createTime: item.create_time,
          //       url: item.url,
          //       favoriteNumber: item.favoriteNumber,
          //       latitude: item.latitude,
          //       longitude: item.longitude,
          //     })
          //   }
          // >

          <View key={index}>
            <InformationUserPosted
              createTime={item.createTime}
              uid={item.uid}
            />
            <Image
              style={styles.imageSize}
              source={{ uri: item.url }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View>
              <Text>お気に入り数{item.favoriteNumber}</Text>
              <Text>
                {item.latitude}:{item.longitude}
              </Text>
            </View>
          </View>
          // </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageList;
