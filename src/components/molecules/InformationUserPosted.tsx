import React, { FC } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";

type Props = {
  postUserName: string;
  postUserImage: string;
  createTime: string;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const { postUserName, postUserImage, createTime } = props;

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
        <Text>{postUserName}</Text>
        <Text>{createTime}</Text>
      </View>
    </View>
  );
};

export default InformationUserPosted;
