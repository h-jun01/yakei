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
import { TabParamList } from "../../../index";
import { StackParamList } from "../../../index";
import { styles } from "../../../styles/user/user";
import { deviceWidth } from "../../../utilities/dimensions";

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
    <ScrollView>
      <View>
        <Image
          source={{ uri: headerImage }}
          style={{ width: deviceWidth, height: 150 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View>
          <Text>{name}のマイページ</Text>
          <Avatar
            size={100}
            activeOpacity={0.7}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            source={{
              uri: image,
            }}
          />
          <Text>{selfIntroduction}</Text>
          <Text>写真一覧</Text>
          {photoDataList !== undefined &&
            photoDataList.map((item, index) => (
              <View key={index}>
                <Image
                  style={styles.userImage}
                  PlaceholderContent={<ActivityIndicator />}
                  source={{
                    uri: item.URL,
                  }}
                />
              </View>
            ))}
          <Button title="設定" onPress={() => navigation.navigate("設定")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default User;
