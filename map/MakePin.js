import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export const Pin = (props) => {
  const position = {
    x: props.x,
    y: props.y,
  };
  return (
    <MapView.Marker
      // key={i}
      title="Hello there"
      coordinate={{
        latitude: position.x && position.x,
        longitude: position.y && position.y,
      }}
      // image={orangeMarkerImg}
    />
  );
};
