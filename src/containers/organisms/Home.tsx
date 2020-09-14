import React, { FC, useEffect, useState } from "react";
import Home from "../../components/organisms/Home";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { photoFireStore } from "../../firebase/photoFireStore";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotoListData } from "../../actions/allPhoto";
import { RootState } from "../../reducers/index";
import { Region } from "../../entities/map";

type Props = {
  navigation: any;
};

const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;
  const selectMyuid = (state: RootState) => state.userReducer.uid;

  const allPhotoList = useSelector(selectAllPhotoDataList);
  const bottomHeight = useSelector(selectBottomHeight);
  const myUid = useSelector(selectMyuid);
  const [region, setRegion] = useState<Region>({
    latitude: 35.6809591,
    longitude: 139.7673068,
    latitudeDelta: 20,
    longitudeDelta: 20,
  });
  const [initialRegion, setInitialRegion] = useState<Region | "loading">(
    "loading"
  );

  useEffect(() => {
    const setPhotos = async () => {
      try {
        photoFireStore.getAllPhotoList().then((res) => {
          dispatch(setAllPhotoListData(res));
        });
      } catch (error) {
        // do something
      }
    };
    const setLocation = async () => {
      try {
        await Permissions.askAsync(Permissions.LOCATION);
        const location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
      } catch (error) {
        setInitialRegion({
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }
    };
    setPhotos();
    setLocation();
  }, []);

  return (
    <Home
      navigation={navigation}
      allPhotoList={allPhotoList}
      bottomHeight={bottomHeight}
      region={region}
      initialRegion={initialRegion}
      myUid={myUid}
    />
  );
};

export default ContainerHome;
