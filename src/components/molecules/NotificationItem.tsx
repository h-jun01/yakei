import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { NotificationScreenStackParamList } from "../../screens/NotificationScreen";
import { deviceWidth } from "../../utilities/dimensions";
import { callingAlert } from "../../utilities/alert";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import NotificationText from "../atoms/NotificationText";

type NotificationScreenNavigationProp = StackNavigationProp<
  NotificationScreenStackParamList,
  "post"
>;

type Props = {
  navigation: NotificationScreenNavigationProp;
  item: firebase.firestore.DocumentData;
  data: firebase.firestore.DocumentData | undefined;
};

const NotificationItem: FC<Props> = ({ navigation, item, data }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          !!data
            ? navigation.navigate("post", {
                imageData: {
                  photo_id: data.photo_id,
                  uid: data.uid,
                  create_time: data.create_time,
                  url: data.url,
                  favoriteNumber: data.favoriteNumber,
                  latitude: data.latitude,
                  longitude: data.longitude,
                  photogenic_subject: data.photogenic_subject,
                  img_index: data.img_index,
                },
              })
            : callingAlert("投稿が見つかりませんでした。")
        }
      >
        <View style={styles.wrapper}>
          <Image
            style={styles.userImage}
            source={{
              uri: item.opponent_url,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <NotificationText
            opponent_name={item.opponent_name}
            content={item.content}
            create_time={item.create_time}
          />
          <Image
            style={styles.photoImage}
            source={{
              uri: item.photo_url,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.border} />
    </>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: platformIOS.isPad ? wp("2.7%") : wp("3.7%"),
  },
  userImage: {
    width: platformIOS.isPad ? wp("10.5%") : wp("12.5%"),
    height: platformIOS.isPad ? wp("10.5%") : wp("12.5%"),
    borderRadius: 180,
  },
  photoImage: {
    width: platformIOS.isPad ? wp("16%") : wp("17.5%"),
    height: platformIOS.isPad ? wp("16%") : wp("17.5%"),
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
  },
});

export default NotificationItem;
