import React, { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  postUserName: string;
  postUserImage: string;
  create_time: Timestamp;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, create_time } = props;

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
        <Text style={styles.timeStamp}>{create_time}</Text>
      </View>
      <Text style={styles.dotsVertical}>
        <MaterialCommunityIcons name="dots-vertical" size={20} />
      </Text>
    </View>
  );
};

export default InformationUserPosted;
