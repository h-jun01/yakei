import React, { FC } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { deviceWidth } from "../../utilities/dimensions";

type UserScreenNavigationProp = StackNavigationProp<UserScreenStackParamList>;

type Props = {
  navigation: UserScreenNavigationProp;
  item: firebase.firestore.DocumentData;
  aspectRatio: number;
};

const PhotoDataItem: FC<Props> = ({ navigation, item, aspectRatio }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.push("post", {
          imageData: {
            photo_id: item.photo_id,
            uid: item.uid,
            create_time: item.create_time,
            url: item.url,
            favoriteNumber: item.favoriteNumber,
            latitude: item.latitude,
            longitude: item.longitude,
            photogenic_subject: item.photogenic_subject,
            img_index: item.img_index,
            aspectRatio,
          },
        })
      }
    >
      <Image
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
        source={{
          uri: item.url,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: deviceWidth / 3.05,
    height: deviceWidth / 3.05,
    margin: deviceWidth / 370,
  },
});

export default PhotoDataItem;
