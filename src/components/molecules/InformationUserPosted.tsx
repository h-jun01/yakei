import React, { FC, Fragment } from "react";
import { ScrollView, View, Text } from "react-native";
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
    <Fragment>
      <Image
        style={styles.userIcon}
        source={{
          uri: postUserImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>{postUserName}</Text>
      <Text>{createTime}</Text>
    </Fragment>
  );
};

export default InformationUserPosted;
