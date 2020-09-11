import React, { FC, useEffect, useState } from "react";
import PostMap from "../../components/organisms/PostedMap";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { photoFireStore } from "../../firebase/photoFireStore";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotoListData } from "../../actions/allPhoto";
import { RootState } from "../../reducers/index";

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: any;
};

const PostedMap: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [region, setRegion] = useState<Region>({
    latitude: 35.6340873,
    longitude: 139.525187,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        await Permissions.askAsync(Permissions.LOCATION);
        const location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
      } catch (error) {
        // to do
      }
    };
    fetch();
  }, []);

  const onLongPress = (latitude: number, longitude: number) => {
    setRegion({
      latitude,
      longitude,
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  };

  const onRegionChangeComplete = (
    latitudeDelta: number,
    longitudeDelta: number
  ) => {
    console.log(latitudeDelta);
    console.log(longitudeDelta);
    setRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    });
  };

  return (
    <PostMap
      navigation={navigation}
      region={region}
      onLongPress={onLongPress}
      onRegionChangeComplete={onRegionChangeComplete}
    />
  );
};

export default PostedMap;
