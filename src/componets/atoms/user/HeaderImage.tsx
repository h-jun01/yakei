import React, { FC } from "react";
import { ActivityIndicator,StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { deviceWidth, deviceHeight } from "../../../utilities/dimensions";

type Props = {
  userHeaderImage: string;
};

const HeaderImage: FC<Props> = ({ userHeaderImage }) => {
  return (
    <Image
      source={{ uri: userHeaderImage }}
      style={styles.headerImageSize}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};
const styles = StyleSheet.create({
  headerImageSize: {
    width: deviceWidth,
    height: deviceHeight / 6,
  },
});

export default HeaderImage;
