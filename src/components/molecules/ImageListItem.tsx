import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet, ActivityIndicator } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "react-native-elements";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { deviceWidth } from "../../utilities/dimensions";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import PostedPageItems from "../../containers/molecules/PostedPageItems";

type ImageListScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "detail"
>;

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

type Props = {
  item: PhotoDataList;
  navigation: ImageListScreenNavigationProp;
  isLast: boolean;
  aspectRatio: number;
};

const ImageListItem: FC<Props> = ({ ...props }) => {
  const { item, navigation, isLast, aspectRatio } = props;

  return (
    <View style={isLast ? {} : styles.itemWrap}>
      <InformationUserPosted
        navigation={navigation}
        uid={item.uid}
        photo_id={item.photo_id}
        photogenic_subject={item.photogenic_subject}
        img_index={item.img_index}
        url={item.url}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("post", {
            imageData: {
              photo_id: item.photo_id,
              uid: item.uid,
              create_time: item.create_time,
              url: item.url,
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
        latitude={item.latitude}
        longitude={item.longitude}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrap: {
    marginBottom: hp("1.5%"),
  },
  imageSize: {
    width: deviceWidth,
    height: deviceWidth,
  },
});

export default ImageListItem;
