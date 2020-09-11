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
};

const PostMap: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation, region } = props;
  let _map;
  _map = React.useRef(null);
  useEffect(() => {
    dispatch(setPostPhoto(region.latitude, region.longitude));
    _map.current.animateToRegion(region);
  });

  return (
    <Container style={styles.box}>
      <MapView
        ref={_map}
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={region}
      >
        <Marker
          draggable
          coordinate={region}
          image={require("../../../assets/pin02.png")}
          onDragEnd={(e) =>
            dispatch(
              setPostPhoto(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude
              )
            )
          }
        />
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>ここで決まり</Text>
      </TouchableOpacity>
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
