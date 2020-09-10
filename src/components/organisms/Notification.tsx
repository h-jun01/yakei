import React, { FC, Fragment } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";
import NotificationText from "../atoms/NotificationText";
import NoNotificationTex from "../atoms/NoNotificationText";

type Props = {
  navigation: any;
  notificationDataList: firebase.firestore.DocumentData[];
  bottomHeight: number;
};

const Notification: FC<Props> = ({
  navigation,
  notificationDataList,
  bottomHeight,
}) => {
  return (
    <React.Fragment>
      {notificationDataList.length !== 0 &&
      notificationDataList !== undefined ? (
        <ScrollView style={[styles.container, { paddingBottom: bottomHeight }]}>
          <View style={styles.box}>
            {notificationDataList.map((item, index) => (
              <Fragment key={index}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    navigation.navigate("otherUser", {
                      uid: item.opponent_uid,
                      name: item.opponent_name,
                    })
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
              </Fragment>
            ))}
          </View>
        </ScrollView>
      ) : (
        <NoNotificationTex />
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor.base,
  },
  box: {
    alignItems: "center",
    paddingBottom: 104,
  },
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

export default Notification;
