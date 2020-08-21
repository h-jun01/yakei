import React, { FC } from "react";
import { ActivityIndicator,StyleSheet,View } from "react-native";
import { Image } from "react-native-elements";
import { deviceWidth, deviceHeight } from "../../../utilities/dimensions";
import { utilityColor } from '../../../styles/thema/colors'

type Props = {
  userHeaderImage: string;
};

const HeaderImage: FC<Props> = ({ userHeaderImage }) => {
  return (
    <Image
      source={{ uri: userHeaderImage }}
      style={styles.headerImageSize}
      PlaceholderContent={<ActivityIndicator/>}
    >
      <View style={styles.overlay} ></View>
    </Image>
  );
};
const styles = StyleSheet.create({
  headerImageSize: {
    width: deviceWidth,
    height: deviceHeight / 3,
  },
  overlay: {
    width: deviceWidth,
    height: deviceHeight / 3,
    backgroundColor: utilityColor.overlay,
  },
});

export default HeaderImage;
