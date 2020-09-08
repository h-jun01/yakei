import React, { FC } from "react";
import { StyleSheet, Image } from "react-native";

type Props = {
  aspect: number;
  borderWidth: number;
  url: string;
  color?: string;
};

const RoundedUserImageComponent: FC<Props> = ({
  aspect,
  borderWidth,
  url,
  color = "#838692",
}) => {
  const styles = StyleSheet.create({
    image: {
      borderRadius: aspect / 2,
      borderColor: color,
      borderWidth: borderWidth,
    },
  });

  return (
    <Image
      source={{ uri: url }}
      style={[{ width: aspect, height: aspect }, styles.image]}
    />
  );
};

export default RoundedUserImageComponent;
