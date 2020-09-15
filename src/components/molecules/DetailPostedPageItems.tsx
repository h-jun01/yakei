import React, { FC, Fragment } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
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

const styles = StyleSheet.create({
  postItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp("1%"),
    marginRight: "auto",
  },
  favorite: {
    color: baseColor.text,
    fontSize: Size.Small,
    fontWeight: "500",
    marginRight: wp(".5%"),
    marginLeft: wp(".5%"),
  },
  favoriteNumber: {
    color: baseColor.text,
    fontSize: Size.Small,
    fontWeight: "400",
    marginRight: wp("5%"),
  },
  location: {
    color: baseColor.text,
  },
  timeStamp: {
    paddingLeft: hp("1.4%"),
    paddingBottom: hp("1.5%"),
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  touchableOpacity: {
    flexDirection: "row",
  },
});

export default DetailPostedPageItems;
