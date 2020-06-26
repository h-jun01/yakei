import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export const Pin = (props) => {
  return (
    <MapView.Marker
      // key={i}
      title="Hello there"
      coordinate={{
        latitude: props.x,
        longitude: props.y,
      }}
      // image={orangeMarkerImg}
    />
  );
};
