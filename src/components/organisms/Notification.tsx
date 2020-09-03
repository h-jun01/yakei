import React, { FC, Fragment } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { useDisplayTime } from "../../utilities/hooks/date";
import { styles } from "../../styles/notification";

type Props = {
  navigation: any;
  notification: firebase.firestore.DocumentData[];
};

const Notification: FC<Props> = ({ notification }) => {
  return (
    <View style={styles.container}>
      {notification.length !== 0 ? (
        notification.map((item, index) => (
          <Fragment key={index}>
            <View style={styles.wrapper}>
              <Image
                style={styles.userImage}
                source={{
                  uri: item.partner_url,
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <View>
                <Text style={styles.text}>
                  <Text style={styles.nameSize}>{item.partner_name}</Text>
                  さんがあなたの{"\n"}写真に
                  {item.content}
                  しました。
                </Text>
                <Text style={styles.timeStamp}>
                  {useDisplayTime(item.create_time.toDate())}
                </Text>
              </View>
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
            あなたの写真にコメントやいいねされたときにお知らせがこちらの表示されます。
          </Text>
        </View>
      )}
    </View>
  );
};

export default Notification;
