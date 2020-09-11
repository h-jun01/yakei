import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Container } from "native-base";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useDispatch } from "react-redux";
import { setPostPhoto } from "../../actions/postPhoto";

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
  map: React.RefObject<MapView>;
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
    map,
    onLongPress,
    onRegionChangeComplete,
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
            ref={map}
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
            <AnimatedMarker
              tracksViewChanges
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
