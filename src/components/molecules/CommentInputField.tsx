import React, { FC } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";

type Props = {
  userImage: string;
  focusOnInput: () => void;
};

const CommentInputField: FC<Props> = ({ userImage, focusOnInput }) => {
  return (
    <View>
      <Text>aa</Text>
    </View>
  );
};

export default CommentInputField;
