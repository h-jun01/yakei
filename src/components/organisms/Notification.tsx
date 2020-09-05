import React, { FC, Fragment } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/notification";
import NotificationText from "../atoms/NotificationText";

type Props = {
  navigation: any;
  notificationDataList: any[];
};

const Notification: FC<Props> = ({ notificationDataList }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {notificationDataList.length !== 0 &&
        notificationDataList !== undefined ? (
          notificationDataList.map((item, index) => (
            <Fragment key={index}>
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
              <View style={styles.border} />
            </Fragment>
          ))
        ) : (
          <View style={styles.noNotification}>
            <Text style={styles.noNotificationText}>
              通知はまだ届いていません。
            </Text>
            <Text style={styles.supplement}>
              あなたの写真にコメントやいいねされたときにお知らせがこちらに表示されます。
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Notification;
