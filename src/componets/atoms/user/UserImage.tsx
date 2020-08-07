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
      style={{
        width: size + 10,
        height: size + 10,
        borderRadius: 50,
        borderWidth: 9,
        borderColor: "#1a1a1a",
      }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};

export default UserImage;
