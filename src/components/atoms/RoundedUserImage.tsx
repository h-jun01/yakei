import React, { FC } from "react";
import { StyleSheet, Image } from "react-native";

type Props = {
  aspect: number;
  borderWidth: number;
  color?: string;
};

const source = {
  uri:
    "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/users%2F8HG1hZgvW7WiXA1oaaPMyn59ayB2%2Fuser.jpeg?alt=media&token=cb63a15b-d239-4543-9e1c-d45e1932bb98",
};

const RoundedUserImageComponent: FC<Props> = ({
  aspect,
  borderWidth,
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
      source={source}
      style={[{ width: aspect, height: aspect }, styles.image]}
    />
  );
};

export default RoundedUserImageComponent;
