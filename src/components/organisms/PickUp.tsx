import React, { FC } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/pickUp/pickUp";

type PickUpItemList = {
  title: string;
  time: string;
  url: ImageSourcePropType;
  pickUpDataList: firebase.firestore.DocumentData[];
};

type Props = {
  navigation: any;
  pickUpItemList: PickUpItemList[];
};

const PickUp: FC<Props> = ({ navigation, pickUpItemList }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        {pickUpItemList.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
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
            <View style={styles.itemInfoWrap}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default PickUp;
