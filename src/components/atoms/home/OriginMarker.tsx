import React from "react";
import { MarkerProps } from "react-native-maps";

type MarkerDate = {
  markerDate: {
    photo_id: string;
    uid: string;
    name: string;
    createTime: string;
    url: string;
    favoriteNumber: number;
    latitude: number;
    longitude: number;
  };
} & MarkerProps;

class OriginMarker extends React.Component<MarkerDate, {}> {}

export default OriginMarker;
