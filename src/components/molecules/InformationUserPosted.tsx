import React, { FC } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  postUserName: string;
  postUserImage: string;
  create_time: string;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, create_time } = props;

  return (
    <View style={styles.userData}>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Text style={styles.userName}>{postUserName}</Text>
        <Text style={styles.time}>{create_time}</Text>
      </View>
      <Text style={styles.dotsVertical}>
        <MaterialCommunityIcons name="dots-vertical" size={20} />
      </Text>
    </View>
  );
};

export default InformationUserPosted;
