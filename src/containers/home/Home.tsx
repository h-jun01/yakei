import React, { FC, useEffect } from "react";
import { accountFireStore } from "../../firebase/accountFireStore";
import Home, { HomeScreenNavigationProp } from "../../componets/home/Home";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Region } from "../../entities/index";

const getLocationAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  // if (status !== "granted") {
  //   this.setState({
  //     message: "位置情報のパーミッションの取得に失敗しました。",
  //   });
  //   return;
  // }
  const location = await Location.getCurrentPositionAsync({});

  const region: Region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };
  return region;
};

type Props = {
  navigation: HomeScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  let region: Region = {
    latitude: 35.6340873,
    longitude: 139.525187,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await Permissions.askAsync(Permissions.LOCATION);
        const location = await Location.getCurrentPositionAsync({});
        region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 8.5,
          longitudeDelta: 8.5,
        };
      } catch (error) {
        // to do
      }
      fetch();
    };
  }, []);

  //例）このファイルで作った処理をcomponents側に渡す
  const title = "地図";
  return (
    <Home
      navigation={navigation}
      signOutUser={accountFireStore.signOutUser}
      title={title}
      region={region}
    />
  );
};

export default ContainerHome;
