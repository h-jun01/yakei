import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

// const STATUS_BAR_HEIGHT = Platform.OS == "ios" ? 20 : statusbar.currentHeight;

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
      //   35.63408731
      //   39.525187
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
    // console.log(location.coords.latitude + "" + location.coords.longitude);
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
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
          />
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
