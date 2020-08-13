import React, { FC } from "react";
import { View, Text, Button } from "react-native";

type Props = {
  allPhotoId: string;
};

//主に見た目に関する記述はこのファイル
const Detail: FC<Props> = ({ ...props }) => {
  const { allPhotoId } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>地図の{allPhotoId}</Text>
    </View>
  );
};

export default Detail;
