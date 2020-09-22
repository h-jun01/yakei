import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { baseColor } from "../../styles/thema/colors";
import ImageListItem from "../../containers/molecules/ImageListItem";

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
  photoDataList: PhotoDataList[];
  navigation: ImageListScreenNavigationProp;
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
            <ImageListItem
              item={item}
              navigation={navigation}
              isLast={isLast}
              key={index}
            />
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
});

export default ImageList;
