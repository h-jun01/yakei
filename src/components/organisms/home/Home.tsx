import React, { FC, useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Container } from "native-base";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Region } from "../../../entities/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/index";
import { PhotoData } from "../../../entities/index";

import LocationButtonView from "./PresentLocationButton";

type Props = {
  navigation: any;
  region: Region;
  allPhotoList: firebase.firestore.DocumentData[];
  myPhotoList: firebase.firestore.DocumentData[];
};

//主に見た目に関する記述はこのファイル
const Home: FC<Props> = ({ ...props }) => {
  const { navigation, region, allPhotoList, myPhotoList } = props;
  const [photoDisplayFlag, setPhotoDisplayFlag] = useState(true);

  return (
    <Container>
      {photoDisplayFlag && (
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
          onClusterPress={(cluster, markers) => {
            const photoDataList: firebase.firestore.DocumentData[] = [];
            markers?.forEach((value) => {
              photoDataList.push(value["properties"]["markerDate"]);
            });
            navigation.navigate("Detail", {
              allPhoto: photoDataList,
            });
          }}
          preserveClusterPressBehavior={true}
        >
          {allPhotoList !== undefined &&
            allPhotoList.map((data) => {
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
      )}
      {!photoDisplayFlag && (
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          clusterColor="#ff0000"
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
          onClusterPress={(cluster, markers) => {
            let photoDataList: any = [];
            markers?.forEach((value) => {
              photoDataList.push(value["properties"]["markerDate"]);
            });
            navigation.navigate("Detail", {
              allPhoto: photoDataList,
            });
          }}
          preserveClusterPressBehavior={true}
        >
          {myPhotoList !== undefined &&
            myPhotoList.map((data) => {
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
      )}
      <LocationButtonView
        onPressIcon={() => {
          setPhotoDisplayFlag(!photoDisplayFlag);
        }}
      />
    </Container>
  );
};

export default Home;
