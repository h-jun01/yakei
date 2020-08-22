import React, { FC } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../../styles/pickUp/pickUp";

type PickUpItemList = {
  title: string;
  time: string;
  url: ImageSourcePropType;
  pickUpDataList: any[];
};

type Props = {
  navigation: any;
  pickUpItemList: PickUpItemList[];
};

const PickUp: FC<Props> = ({ navigation, pickUpItemList }) => {
  return (
    <ScrollView style={styles.container}>
      {pickUpItemList.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("detail", {
              photoDataList: item.pickUpDataList,
            })
          }
        >
          <Image
            style={styles.image}
            source={item.url}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text>{item.title}</Text>
          <Text>{item.time}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PickUp;
