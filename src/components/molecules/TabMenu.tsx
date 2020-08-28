import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import { Image } from "react-native-elements";
import { styles } from "../../styles/user/user";
import Icon from "react-native-vector-icons/FontAwesome";
import { baseColor, utilityColor } from "../../styles/thema/colors";

type Props = {
  photoDataList: firebase.firestore.DocumentData[];
  favoriteList: firebase.firestore.DocumentData[];
};

const TabMenu: FC<Props> = ({ photoDataList, favoriteList }) => {
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
              <Image
                key={index}
                style={styles.imgItem}
                PlaceholderContent={<ActivityIndicator />}
                source={{
                  uri: item.url,
                }}
              />
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
          {favoriteList !== undefined &&
            favoriteList.map((item, index) => (
              <Image
                key={index}
                style={styles.imgItem}
                PlaceholderContent={<ActivityIndicator />}
                source={{
                  uri: item.url,
                }}
              />
            ))}
        </View>
      </Tab>
    </Tabs>
  );
};

export default TabMenu;
