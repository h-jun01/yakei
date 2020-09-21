import React, { FC } from "react";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import { Image } from "react-native-elements";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { baseColor } from "../../styles/thema/colors";
import { deviceWidth } from "../../utilities/dimensions";
import Icon from "react-native-vector-icons/FontAwesome";

type UserScreenNavigationProp = StackNavigationProp<UserScreenStackParamList>;

type Props = {
  navigation: UserScreenNavigationProp;
  photoDataList: firebase.firestore.DocumentData[];
  favoriteItems: firebase.firestore.DocumentData[];
};

const TabMenu: FC<Props> = ({ navigation, photoDataList, favoriteItems }) => {
  return (
    <Tabs
      tabBarUnderlineStyle={{
        borderBottomWidth: 4,
        borderBottomColor: "#fff",
      }}
    >
      <Tab
        heading={
          <TabHeading style={{ backgroundColor: baseColor.base }}>
            <Icon name="th" style={{ color: "#fff", fontSize: 22 }} />
          </TabHeading>
        }
      >
        <View style={styles.imgItemWrap}>
          {photoDataList !== undefined &&
            photoDataList.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("post", {
                    imageData: {
                      photo_id: item.photo_id,
                      uid: item.uid,
                      create_time: item.create_time,
                      url: item.url,
                      favoriteNumber: item.favoriteNumber,
                      latitude: item.latitude,
                      longitude: item.longitude,
                      photogenic_subject: item.photogenic_subject,
                      img_index: item.img_index,
                    },
                  })
                }
              >
                <Image
                  style={styles.image}
                  PlaceholderContent={<ActivityIndicator />}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableOpacity>
            ))}
        </View>
      </Tab>
      <Tab
        heading={
          <TabHeading style={{ backgroundColor: baseColor.base }}>
            <Icon name="heart-o" style={{ color: "#ffffff", fontSize: 22 }} />
          </TabHeading>
        }
      >
        <View style={styles.imgItemWrap}>
          {favoriteItems !== undefined &&
            favoriteItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("post", {
                    imageData: {
                      photo_id: item.photo_id,
                      uid: item.uid,
                      create_time: item.create_time,
                      url: item.url,
                      favoriteNumber: item.favoriteNumber,
                      latitude: item.latitude,
                      longitude: item.longitude,
                      photogenic_subject: item.photogenic_subject,
                      img_index: item.img_index,
                    },
                  })
                }
              >
                <Image
                  style={styles.image}
                  PlaceholderContent={<ActivityIndicator />}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableOpacity>
            ))}
        </View>
      </Tab>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  imgItemWrap: {
    flex: 3,
    width: wp("100%"),
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: baseColor.base,
  },
  image: {
    width: deviceWidth / 3.05,
    height: deviceWidth / 3.05,
    margin: deviceWidth / 370,
  },
});

export default TabMenu;
