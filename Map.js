import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./map/mapStyle.json";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { Pin } from "./map/MakePin";

// const STATUS_BAR_HEIGHT = Platform.OS == "ios" ? 20 : statusbar.currentHeight;

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

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 35.6340873,
        longitude: 139.525187,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
      //   35.6340873
      //   139.525187
      message: "位置情報取得中",
      locationResult: null,
    };
  }
  componentDidMount() {
    this.getLocationAsync();
  }
  getLocationAsync = async () => {
    console.log("現在位置取得中");
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        message: "位置情報のパーミッションの取得に失敗しました。",
      });
      return;
    }
    const location = await Location.getCurrentPositionAsync({});

    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5,
      },
    });
    console.log(this.state.region.latitude);
    console.log(this.state.region.longitude);
  };

  render() {
    if (this.state.region.longitude != null) {
      return (
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={this.state.region}
            followsUserLocation={true}
            clustering={true}
            edgePadding={{ top: 30, left: 0, bottom: 0, right: 0 }}
            clusterColor="#000"
            clusterTextColor="#fff"
            clusterBorderColor="#fff"
            spiderLineColor="#f00"
            customMapStyle={mapStyle}
            customClusterMarkerDesign={
              <Image
                style={{ height: 50, width: 35 }}
                source={require("./assets/chochin.png")}
              />
            }
          >
            {point.map((data) => {
              return (
                <Marker
                  coordinate={{
                    latitude: data.latitude,
                    longitude: data.longitude,
                  }}
                  clusterTextColor="#f00"
                >
                  <Image
                    source={require("./assets/chochin.png")}
                    style={{ height: 50, width: 35 }}
                  />
                </Marker>
              );
            })}
          </MapView>

          {/* <ClusteredMapView
            style={{ flex: 1 }}
            initialRegion={this.state.region}
          /> */}
          <Text>{this.state.region.latitude}</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.state.region.latitude}</Text>
      </View>
    );
  }
}
