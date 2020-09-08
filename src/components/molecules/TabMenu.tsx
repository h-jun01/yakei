import React, { FC } from "react";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import { Image } from "react-native-elements";
import { styles } from "../../styles/user/user";
import Icon from "react-native-vector-icons/FontAwesome";
import { baseColor, utilityColor } from "../../styles/thema/colors";

type Props = {
  navigation: any;
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

export default TabMenu;
