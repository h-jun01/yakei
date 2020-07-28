import React, { FC } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";
import { styles } from "../../styles/user/user";

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
  photoDataList: PhotoDataList[];
};

const User: FC<Props> = ({ ...props }) => {
  const { navigation, name, image, photoDataList } = props;

  return (
    <View style={styles.container}>
      <Text>{name}のマイページ</Text>
      <Text>ユーザーアイコン</Text>
      <Image
        style={styles.userImage}
        source={{
          uri: image,
        }}
      />
      <Text>写真一覧</Text>
      {/* {photoDataList[0] !== undefined
        ? photoDataList.map((item, index) => (
            <View key={index}>
              <Image
                style={styles.userImage}
                source={{
                  uri: item.URL,
                }}
              />
            </View>
          ))
        : console.log("noData")} */}
      <FlatList
        data={photoDataList}
        renderItem={({ item }) => (
          <Image
            style={styles.userImage}
            source={{
              uri: item.URL,
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="設定" onPress={() => navigation.navigate("設定")} />
    </View>
  );
};

export default User;
