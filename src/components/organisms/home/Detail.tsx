import React, { FC } from "react";
import { View, Text, Button } from "react-native";

type Props = {
  allPhoto: string;
};

//主に見た目に関する記述はこのファイル
const Detail: FC<Props> = ({ ...props }) => {
  const { allPhoto } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>地図の{allPhoto}</Text>
    </View>
  );
};

export default Detail;
