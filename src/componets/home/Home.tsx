import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../index";
import { StackParamList } from "../../index";

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Region } from "../../entities/index";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  signOutUser: () => void;
  title: string;
  region: Region;
};
// デモデータ(本来はfirestoreからのデータで行う)
const point = [
  {
    latitude: 35.6340873,
    longitude: 139.525187,
  },
  {
    latitude: 35.5340774,
    longitude: 139.525187,
  },
  {
    latitude: 35.4340775,
    longitude: 139.525187,
  },
  {
    latitude: 35.6240873,
    longitude: 139.525187,
  },
  {
    latitude: 35.5333774,
    longitude: 139.525187,
  },
  {
    latitude: 35.4320775,
    longitude: 139.515187,
  },
  {
    latitude: 35.4320771,
    longitude: 139.515187,
  },
];

//主に見た目に関する記述はこのファイル
const Home: FC<Props> = ({ ...props }) => {
  const { navigation, signOutUser, title, region } = props;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={region}
      >
        {point.map((data) => {
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
            ></Marker>
          );
        })}
      </MapView>
      {/* <Text>{title}の画面</Text> */}
      {/* <Button
        title="地図の詳細"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button title="ログアウト" onPress={() => signOutUser()} /> */}
    </View>
  );
};

export default Home;
