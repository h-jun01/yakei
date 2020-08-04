import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../../styles/user/editProfile";

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

export default HeaderImage;
