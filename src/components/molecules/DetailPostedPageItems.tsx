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
      <Text style={styles.favorite}>
        <EvilIcons name="heart" size={23} />
      </Text>
      <Text style={styles.favoriteNumber}>{favoriteNumber}</Text>
      <Text style={styles.location}>
        <EvilIcons name="location" size={21} />
      </Text>
    </View>
  );
};

export default DetailPostedPageItems;
