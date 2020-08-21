import React, { FC } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../../styles/user/user";
import { deviceWidth, deviceHeight } from "../../../utilities/dimensions";
import UserImage from "../../atoms/user/UserImage";

type FavoriteList = {
  uid: string;
  photo_id: string;
  url: string;
  createTime: string;
  latitude: number;
  longitude: number;
  geohash: number;
  favoriteNumber: number;
};

type Props = {
  navigation: any;
  name: string;
  image: string;
  headerImage: string;
  selfIntroduction: string;
  photoDataList: firebase.firestore.DocumentData[];
  favoriteList: FavoriteList[];
};

const User: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    name,
    image,
    headerImage,
    selfIntroduction,
    photoDataList,
    favoriteList,
  } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        <Image
          source={{ uri: headerImage }}
          style={{ width: deviceWidth, height: deviceHeight / 5 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.userInfoWrap}>
          <View style={styles.iconBox}>
            <UserImage userImage={image} size={deviceWidth / 5} />
          </View>
          <View style={styles.baseLine}>
            <Button
              title="設定"
              onPress={() => navigation.navigate("setting")}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userIntro}>{selfIntroduction}</Text>
            <Text style={styles.photoText}>写真一覧</Text>
          </View>
          <View style={styles.imgItemWrap}>
            {photoDataList !== undefined &&
              photoDataList.map((item, index) => (
                <View key={index}>
                  <Image
                    style={styles.imgItem}
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: item.url,
                    }}
                  />
                </View>
              ))}
          </View>
          {/* お気に入り */}
          <View style={styles.userInfo}>
            {favoriteList !== undefined &&
              favoriteList.map((item, index) => (
                <View key={index}>
                  <Image
                    style={styles.imgItem}
                    PlaceholderContent={<ActivityIndicator />}
                    source={{
                      uri: item.url,
                    }}
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default User;
