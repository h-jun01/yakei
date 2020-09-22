import React, { FC } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { baseColor } from "../../styles/thema/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import PhotoDataItem from "../../containers/molecules/PhotoDataItem";

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
              <PhotoDataItem navigation={navigation} item={item} key={index} />
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
              <PhotoDataItem navigation={navigation} item={item} key={index} />
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
});

export default TabMenu;
