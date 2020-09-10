import React, { FC } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import NotificationText from "../atoms/NotificationText";
import { callingAlert } from "../../utilities/alert";

type Props = {
  navigation: any;
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

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 15,
  },
  userImage: {
    width: 52,
    height: 52,
    borderRadius: 180,
  },
  photoImage: {
    width: 72,
    height: 72,
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
  },
});

export default NotificationItem;
