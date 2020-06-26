import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from "./Map";
export default class App extends React.Component {
  render() {
    return <Map />;
  }
}
