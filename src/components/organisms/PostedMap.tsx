import React, { FC, useState, useRef } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Container } from "native-base";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import UserSwitchButtonView from "./UserSwitchButton";
import LocationButtonView from "./PresentLocationButton";
import OriginMarker from "../atoms/OriginMarker";
import { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { photoFireStore } from "../../firebase/photoFireStore";
import { accountFireStore } from "../../firebase/accountFireStore";
import { baseColor } from "../../styles/thema/colors";
import { useSelector, useDispatch } from "react-redux";
import { setPostPhoto } from "../../actions/postPhoto";
import { RootState } from "../../reducers/index";

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: any;
  region: Region;
  initialRegion: Region | "loading" | undefined;
  onLongPress: (latitude: number, longitude: number) => void;
  onRegionChangeComplete: (
    latitudeDelta: number,
    longitudeDelta: number
  ) => void;
};

const PostMap: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const {
    navigation,
    region,
    initialRegion,
    onLongPress,
    onRegionChangeComplete,
  } = props;

  return (
    <Container style={styles.box}>
      {initialRegion === "loading" ? (
        <Spinner
          visible
          textContent="読み込み中…"
          textStyle={{ color: "#fff", fontSize: 13 }}
          overlayColor="rgba(0,0,0,0.5)"
        />
      ) : (
        <>
          <MapView
            style={{ ...StyleSheet.absoluteFillObject }}
            provider={PROVIDER_GOOGLE}
            initialRegion={initialRegion}
            showsUserLocation
            onLongPress={(e) =>
              onLongPress(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude
              )
            }
            onRegionChangeComplete={(e) =>
              onRegionChangeComplete(e.latitudeDelta, e.longitudeDelta)
            }
          >
            <Marker
              coordinate={initialRegion !== undefined ? initialRegion : region}
              image={require("../../../assets/pin02.png")}
            />
          </MapView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(setPostPhoto(region.latitude, region.longitude));
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>ここで決まり</Text>
          </TouchableOpacity>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 60,
    width: 300,
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f00",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
export default PostMap;
