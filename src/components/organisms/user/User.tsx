import React, { FC } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Avatar, Image } from "react-native-elements";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../../ScreenSwitcher";
import { StackParamList } from "../../../ScreenSwitcher";
import { styles } from "../../../styles/user/user";
import { deviceWidth,deviceHeight } from "../../../utilities/dimensions";

export type UserScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "User">,
  StackNavigationProp<StackParamList>
>;

type PhotoDataList = {
  URL: string;
  uid: string;
  latitude: number;
  longitude: number;
};

type Props = {
  navigation: UserScreenNavigationProp;
  name: string;
  image: string;
  headerImage: string;
  selfIntroduction: string;
  photoDataList: PhotoDataList[];
};

const User: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    name,
    image,
    headerImage,
    selfIntroduction,
    photoDataList,
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
          <Avatar
            size={deviceWidth / 5 + 10}
            activeOpacity={0.7}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            source={{
              uri: image,
            }}
            containerStyle={styles.iconBox}
            avatarStyle={styles.iconImg}
          />
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
                      uri: item.URL,
                    }}
                  />
                </View>
              ))}
          </View>
          <Button title="設定" onPress={() => navigation.navigate("設定")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default User;
