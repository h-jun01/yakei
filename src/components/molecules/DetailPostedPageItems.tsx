import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { useDisplayTime } from "../../utilities/hooks/date";
import { styles } from "../../styles/postedImageDetail";
import EvilIcons from "react-native-vector-icons/EvilIcons";

type Props = {
  date: string;
  favoriteNumber: number;
};

const DetailPostedPageItems: FC<Props> = ({ ...props }) => {
  const { favoriteNumber, date } = props;

  return (
    <Fragment>
      <View style={styles.postItem}>
        <Text style={styles.favorite}>
          <EvilIcons name="heart" size={23} />
        </Text>
        <Text style={styles.favoriteNumber}>{favoriteNumber}</Text>
        <Text style={styles.location}>
          <EvilIcons name="location" size={21} />
        </Text>
      </View>
      <Text style={styles.timeStamp}>{date}</Text>
    </Fragment>
  );
};

export default DetailPostedPageItems;
