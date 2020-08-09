import React, { FC } from "react";
import { StyleSheet, Image } from "react-native";

type Props = {
  color?: string;
};

const source = {
  uri:
    "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/users%2F8HG1hZgvW7WiXA1oaaPMyn59ayB2%2Fuser.jpeg?alt=media&token=cb63a15b-d239-4543-9e1c-d45e1932bb98",
};

const RoundedUserImageComponent: FC<Props> = ({ color = "#ddd" }) => {
  const styles = StyleSheet.create({
    image: {
      borderRadius: 14, // width / 2
      borderColor: color,
      borderWidth: 2,
    },
  });

  return (
    <Image source={source} style={[{ width: 28, height: 28 }, styles.image]} />
  );
};

export default RoundedUserImageComponent;
