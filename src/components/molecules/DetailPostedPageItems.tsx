import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/postedImageDetail";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  favoriteNumber: number;
  latitude: number;
  longitude: number;
};

const DetailPostedPageItems: FC<Props> = ({ ...props }) => {
  const { favoriteNumber, latitude, longitude } = props;

  return (
    <View style={styles.postItem}>
      <Text>
        <EvilIcons name="heart" size={20} />
      </Text>
      <Text>{favoriteNumber}</Text>
      <Text>
        <EvilIcons name="location" size={20} />
      </Text>
    </View>
  );
};

export default DetailPostedPageItems;
