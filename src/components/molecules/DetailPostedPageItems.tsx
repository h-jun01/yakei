import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/postedImageDetail";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  // commentCount: number;
  latitude: number;
  longitude: number;
};

const DetailPostedPageItems: FC<Props> = ({ ...props }) => {
  // const { commentCount, latitude, longitude } = props;

  return (
    <View style={styles.postItem}>
      <Text>
        <EvilIcons name="heart" size={20} />
      </Text>
      {/* <Text>{commentCount}</Text> */}
      <Text>
        <EvilIcons name="location" size={20} />
      </Text>
    </View>
  );
};

export default DetailPostedPageItems;
