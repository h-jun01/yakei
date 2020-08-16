import React, { FC } from "react";
import { ScrollView, View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: string;
  url: string;
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
        <Text>
          {photoDataList.map((item, index) => (
            <Text
              key={index}
              onPress={() =>
                navigation.navigate("post", {
                  photo_id: item.photo_id,
                  uid: item.uid,
                  createTime: item.create_time,
                  url: item.url,
                  latitude: item.latitude,
                  longitude: item.longitude,
                })
              }
            >
              <Image
                style={styles.imageSize}
                source={{ uri: item.url }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </Text>
          ))}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ImageList;
