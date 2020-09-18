import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { photoFireStore } from "../../firebase/photoFireStore";
import { setAllPhotoListData } from "../../actions/allPhoto";
import { RootState } from "../../reducers/index";
import { Region } from "../../entities/map";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Home from "../../components/organisms/Home";

type HomeScreenNavigationProp = StackNavigationProp<
  HomeScreenStackParamList,
  "detail"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;

  const allPhotoList = useSelector(selectAllPhotoDataList);
  const myPhotoDataList = useSelector(selectPhotoDataList);
  const bottomHeight = useSelector(selectBottomHeight);
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
    setLocation();
  }, []);

  return (
    <Home
      navigation={navigation}
      allPhotoList={allPhotoList}
      myPhotoList={myPhotoDataList}
      bottomHeight={bottomHeight}
      region={region}
      initialRegion={initialRegion}
    />
  );
};

export default ContainerHome;
