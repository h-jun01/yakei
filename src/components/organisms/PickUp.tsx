import React, { FC } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native-elements";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
    paddingBottom: 101,
  },
  image: {
    width: wp("100%"),
    height: hp("32%"),
  },
  itemInfoWrap: {
    height: hp("7%"),
    width: hp("100%"),
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    backgroundColor: utilityColor.itemFilter,
    padding: hp("1.5%"),
  },
  itemTitle: {
    color: baseColor.text,
    fontSize: Size.NormalL,
    fontWeight: "500",
    paddingBottom: hp("1.3%"),
  },
  itemTime: {
    fontSize: Size.Normal,
    fontWeight: "400",
    color: baseColor.text,
  },
});
