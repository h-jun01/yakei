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
import Icon from "react-native-vector-icons/FontAwesome";
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
        <View style={styles.userInfoWrap}>
          <Image
            source={{ uri: headerImage }}
            style={{ width: deviceWidth, height: deviceHeight / 3 }}
            PlaceholderContent={<ActivityIndicator />}
          >
            <View style={styles.overlay}></View>
          </Image>
          <View style={styles.infoWrap}>
            <View style={styles.iconBox}>
              <UserImage userImage={image} size={deviceWidth / 5} />
            </View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userIntro}>{selfIntroduction}</Text>
            <View style={styles.userState}>
              <Text style={styles.stateText}>投稿数</Text>
              <Text style={styles.stateText}>いいね数</Text>
            </View>
            <Text
              style={styles.buttonItem}
              onPress={() => navigation.navigate("setting")}
            >
              <Icon name="cog" size={23} color={"#fff"} />
            </Text>
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
      </View>
    </ScrollView>
  );
};

export default User;
