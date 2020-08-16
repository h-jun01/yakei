import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import LocationButtonView from "./PresentLocationButton";
import OriginMarker from "../../atoms/home/OriginMarker";

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: any;
  region: Region;
  allPhotoList: firebase.firestore.DocumentData[];
  myPhotoList: firebase.firestore.DocumentData[];
};

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
                <OriginMarker
                  markerDate={{
                    photo_id: data.photo_id,
                    uid: data.uid,
                    createTime: data.createTime,
                    url: data.url,
                    latitude: data.latitude,
                    longitude: data.longitude,
                  }}
                  coordinate={{
                    latitude: data.latitude,
                    longitude: data.longitude,
                  }}
                />
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
          {myPhotoList !== undefined &&
            myPhotoList.map((data) => {
              return (
                <OriginMarker
                  coordinate={{
                    latitude: data.latitude,
                    longitude: data.longitude,
                  }}
                  markerDate={{
                    photo_id: data.photo_id,
                    uid: data.uid,
                    createTime: data.createTime,
                    url: data.url,
                    latitude: data.latitude,
                    longitude: data.longitude,
                  }}
                />
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
