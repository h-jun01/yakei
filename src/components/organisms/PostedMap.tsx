import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { Container } from "native-base";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { baseColor } from "../../styles/thema/colors";
import { mapStyle } from "../../styles/map";
import Spinner from "react-native-loading-spinner-overlay";
import MapView from "react-native-map-clustering";

type UserScreenNavigationProp = StackNavigationProp<HomeScreenStackParamList>;

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: UserScreenNavigationProp;
  region: Region;
  initialRegion: Region | "loading" | undefined;
  onLongPress: (latitude: number, longitude: number) => void;
  onRegionChangeComplete: (
    latitudeDelta: number,
    longitudeDelta: number
  ) => void;
  dispatchPostPhoto: () => void;
};

const PostMap: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    region,
    initialRegion,
    onLongPress,
    onRegionChangeComplete,
    dispatchPostPhoto,
  } = props;

  const AnimatedMarker = Animated.createAnimatedComponent(Marker);

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
            customMapStyle={mapStyle}
          >
            <AnimatedMarker
              tracksViewChanges
              coordinate={initialRegion !== undefined ? initialRegion : region}
              image={require("../../../assets/pin02.png")}
            />
          </MapView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatchPostPhoto();
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>ここで決定する</Text>
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
    backgroundColor: baseColor.base,
  },
  buttonText: {
    fontSize: 20,
    color: baseColor.text,
  },
});
export default PostMap;
