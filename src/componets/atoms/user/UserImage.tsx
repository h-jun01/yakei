import React, { FC } from "react";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";

type Props = {
  userImage: string;
  size: number;
};

const UserImage: FC<Props> = ({ userImage, size }) => {
  return (
    <Image
      source={{ uri: userImage }}
      style={{ width: size, height: size, borderRadius: 50 }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};

export default UserImage;
