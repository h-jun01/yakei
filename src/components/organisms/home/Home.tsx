import React, { FC, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Container } from "native-base";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../../index";
import { StackParamList } from "../../../index";

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Region } from "../../../entities/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/index";
import { PhotoData } from "../../../entities/index";

import LocationButtonView from "./PresentLocationButton";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  region: Region;
  allPhotoList: any;
};

//主に見た目に関する記述はこのファイル
const Home: FC<Props> = ({ ...props }) => {
  const { navigation, region, allPhotoList } = props;

  return (
    <Container>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={region}
        onClusterPress={(cluster, markers) => {
          let photoDataList: any = [];
          markers?.forEach((value) => {
            console.log(value);
            photoDataList.push(value["properties"]["markerDate"]);
          });
          console.log(photoDataList);
          navigation.navigate("Detail", {
            allPhoto: photoDataList,
          });
        }}
        preserveClusterPressBehavior={true}
      >
        {allPhotoList["allPhotoDataList"].map((data) => {
          console.log(data);
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              markerDate={{
                uid: data.uid,
                createTime: data.createTime,
                shootTime: data.shootTime,
                userID: data.userID,
                url: data.url,
                latitude: data.latitude,
                longitude: data.longitude,
              }}
            ></Marker>
          );
        })}
      </MapView>
      <LocationButtonView
        onPressIcon={() => {
          Alert.alert("アイコンをタップしたよ!!");
        }}
      />
    </Container>
  );
};

export default Home;
