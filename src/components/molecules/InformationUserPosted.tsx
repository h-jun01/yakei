import React, { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { Timestamp } from "@google-cloud/firestore";
import { styles } from "../../styles/imageList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  postUserName: string;
  postUserImage: string;
  date: string;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, date } = props;

  return (
    //一覧の1層目
    <View style={styles.userData}>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.userName}>
        <Text style={styles.userName}>{postUserName}</Text>
        <Text style={styles.timeStamp}>{date}</Text>
      </View>
      <Text style={styles.dotsVertical}>
        <MaterialCommunityIcons name="dots-vertical" size={20} />
      </Text>
    </View>
  );
};

export default InformationUserPosted;
