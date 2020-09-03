import React, { FC, Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/postedImageDetail";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

type Props = {
  date: string;
  favoriteNumber: number;
  isFavoriteStatus: boolean;
  pressedFavorite: () => Promise<void>;
};

const DetailPostedPageItems: FC<Props> = ({ ...props }) => {
  const { favoriteNumber, date, isFavoriteStatus, pressedFavorite } = props;

  return (
    <Fragment>
      <View style={styles.postItem}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchableOpacity}
          onPress={() => pressedFavorite()}
        >
          <Text style={styles.favorite}>
            {isFavoriteStatus ? (
              <AntDesign name="heart" size={15} color="#E0245E" />
            ) : (
              <AntDesign name="hearto" size={15} />
            )}
          </Text>
          <Text style={styles.favoriteNumber}>{favoriteNumber}</Text>
        </TouchableOpacity>
        <Text style={styles.location}>
          <EvilIcons name="location" size={21} />
        </Text>
      </View>
      <Text style={styles.timeStamp}>{date}</Text>
    </Fragment>
  );
};

export default DetailPostedPageItems;
