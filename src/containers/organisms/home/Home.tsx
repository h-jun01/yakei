import React, { FC, useEffect } from "react";
import Home, {
  HomeScreenNavigationProp,
} from "../../../components/organisms/home/Home";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { Region, PhotoData } from "../../../entities/index";
import { photoFireStore } from "../../../firebase/photoFireStore";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllPhotoListData,
  defaultPhotoListData,
} from "../../../actions/allPhoto";
import { RootState } from "../../../reducers/index";

const getLocationAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  // if (status !== "granted") {
  //   this.setState({
  //     message: "位置情報のパーミッションの取得に失敗しました。",
  //   });
  //   return;
  // }
  const location = await Location.getCurrentPositionAsync({});

  const region: Region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };
  return region;
};

type Props = {
  navigation: HomeScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  let region: Region = {
    latitude: 35.6340873,
    longitude: 139.525187,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };
  const selectAllPhotoDataList = (state: RootState) => state.allPhotoReducer;
  const allPhotoList = useSelector(selectAllPhotoDataList);

  useEffect(() => {
    dispatch(defaultPhotoListData());
    const fetch = async () => {
      try {
        await Permissions.askAsync(Permissions.LOCATION);
        await photoFireStore.getAllPhotoList().then((documentSnapshot) => {
          documentSnapshot.forEach((value) => {
            dispatch(setAllPhotoListData(value.data()));
          });
        });
        const location = await Location.getCurrentPositionAsync({});
        region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 8.5,
          longitudeDelta: 8.5,
        };
      } catch (error) {
        // to do
      }
    };
    fetch();
  }, []);

  return (
    <Home navigation={navigation} region={region} allPhotoList={allPhotoList} />
  );
};

export default ContainerHome;
