import React, { FC } from "react";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { baseColor } from "../../../styles/thema/colors";


type Props = {
  userImage: string;
  size: number;
};

const UserImage: FC<Props> = ({ userImage, size }) => {
  return (
    <Image
      source={{ uri: userImage }}
      style={{
        width: size,
        height: size,
        borderRadius: 180,
      }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};

export default UserImage;
