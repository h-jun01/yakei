import React, { FC } from "react";
import { View, Text, Button, Image, FlatList, SafeAreaView } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";
import { styles } from "../../styles/user";

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

let numColumns = 3;

const User: FC<Props> = ({ ...props }) => {
  const { navigation, name, image, photoDataList } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{name}のマイページ</Text>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImage}
          source={{
            uri: image,
          }}
        />
        <Text>ユーザーアイコン</Text>
      </View>
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
        <View style={styles.imagesWrap}>
        <FlatList
          numColumns={numColumns}
          data={photoDataList}
          renderItem={({ item }) => (
              <Image
                style={styles.photoImage}
                source={{
                  uri: item.URL,
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      <Button
        title="ユーザページの詳細"
        onPress={() => navigation.navigate("Detail")}
      />
    </SafeAreaView>
  );
};

export default User;
