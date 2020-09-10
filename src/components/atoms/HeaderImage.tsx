import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import { utilityColor } from "../../styles/thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  userHeaderImage: string;
};

const HeaderImage: FC<Props> = ({ userHeaderImage }) => {
  return (
    <Image
      source={{ uri: userHeaderImage }}
      style={styles.headerImageSize}
      PlaceholderContent={<ActivityIndicator />}
    >
      <View style={styles.overlay}></View>
    </Image>
  );
};
const styles = StyleSheet.create({
  headerImageSize: {
    width: wp("100%"),
    height: wp("50%"),
  },
  overlay: {
    width: wp("100%"),
    height: hp("50%"),
    backgroundColor: utilityColor.overlay,
  },
});

export default HeaderImage;
