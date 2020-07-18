import React, { FC } from "react";
import { View, Text, Button } from "react-native";

type Props = {
  title: string;
};

//主に見た目に関する記述はこのファイル
const Detail: FC<Props> = ({ ...props }) => {
  const { title } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>地図の{title}</Text>
    </View>
  );
};

export default Detail;
