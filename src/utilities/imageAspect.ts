import React from "react";
import { Image } from "react-native";

export const setAspectRatioIntoState = (
  uri: string,
  set: React.Dispatch<React.SetStateAction<number>>
) => {
  Image.getSize(
    uri,
    (width, height) => {
      const aspectRatio = height / width;
      set(aspectRatio);
    },
    (error) => {
      set(0);
    }
  );
};
