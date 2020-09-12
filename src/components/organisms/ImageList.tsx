import React, { FC } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import { Image } from "react-native-elements";
import { Timestamp } from "@google-cloud/firestore";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import PostedPageItems from "../../containers/molecules/PostedPageItems";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
};

type Props = {
  photoDataList: PhotoDataList[];
  navigation: any;
  bottomHeight: number;
};

const ImageList: FC<Props> = ({ ...props }) => {
  const { photoDataList, navigation, bottomHeight } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.allWrap, { paddingBottom: bottomHeight }]}>
        {photoDataList.map((item, index) => {
          const isLast = photoDataList.length - 1 === index;
          return (
            <View style={isLast ? {} : styles.itemWrap} key={index}>
              <InformationUserPosted
                navigation={navigation}
                uid={item.uid}
                photo_id={item.photo_id}
                photogenic_subject={item.photogenic_subject}
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
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
  },
  itemWrap: {
    marginBottom: hp("1.5%"),
  },
  imageSize: {
    width: wp("100%"),
    height: hp("25%"),
  },
});

export default ImageList;
