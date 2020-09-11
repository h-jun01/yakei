import React, { FC } from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import NotificationItem from "../../containers/molecules/NotificationItem";
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
        <ScrollView style={styles.container}>
          <View style={[styles.box, { paddingBottom: bottomHeight }]}>
            {notificationDataList.map((item, index) => (
              <NotificationItem
                key={index}
                navigation={navigation}
                item={item}
              />
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
});

export default Notification;
