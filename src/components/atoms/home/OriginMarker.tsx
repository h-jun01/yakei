import React from "react";
import { MarkerProps, Marker, MapEvent } from "react-native-maps";
import {
  Animated,
  ImageRequireSource,
  ImageURISource,
  NativeSyntheticEvent,
  ViewProperties,
} from "react-native";

type MarkerDate = {
  markerDate: {
    photo_id: string;
    uid: string;
    create_time: string;
    url: string;
    favoriteNumber: number;
    latitude: number;
    longitude: number;
    comment_list: firebase.firestore.DocumentData[];
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
  image?: ImageURISource | ImageRequireSource;
  onPress?: (event: MapEvent<{ action: "marker-press"; id: string }>) => void;
} & MarkerProps;

class OriginMarker extends React.Component<MarkerDate> {
  constructor(props: Readonly<MarkerDate>) {
    super(props);
  }

  render() {
    return (
      <Marker
        coordinate={{
          latitude: this.props.coordinate.latitude,
          longitude: this.props.coordinate.longitude,
        }}
        image={this.props.image}
        onPress={this.props.onPress}
      ></Marker>
    );
  }
}

export default OriginMarker;
