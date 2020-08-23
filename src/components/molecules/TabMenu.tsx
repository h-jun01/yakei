import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import { Image } from "react-native-elements";
import { styles } from "../../styles/user/user";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  photoDataList: firebase.firestore.DocumentData[];
  favoriteList: firebase.firestore.DocumentData[];
};

const TabMenu: FC<Props> = ({ photoDataList, favoriteList }) => {
  return (
    <Tabs>
      {/* 投稿 */}
      <Tab
        heading={
          <TabHeading>
            <Icon name="camera" />
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
      {/* お気に入り */}
      <Tab
        heading={
          <TabHeading>
            <Icon name="camera" />
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
