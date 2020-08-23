import React, { FC, useEffect } from "react";
import Home from "../../../components/organisms/home/Home";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { photoFireStore } from "../../../firebase/photoFireStore";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotoListData } from "../../../actions/allPhoto";
import { RootState } from "../../../reducers/index";

// const getLocationAsync = async () => {
//   const { status } = await Permissions.askAsync(Permissions.LOCATION);
//   const location = await Location.getCurrentPositionAsync({});

//   const region: Region = {
//     latitude: location.coords.latitude,
//     longitude: location.coords.longitude,
//     latitudeDelta: 8.5,
//     longitudeDelta: 8.5,
//   };
//   return region;
// };

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: any;
};

const ContainerHome: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  let region: Region = {
    latitude: 35.6340873,
    longitude: 139.525187,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const allPhotoList = useSelector(selectAllPhotoDataList);
  const myPhotoDataList = useSelector(selectPhotoDataList);

  useEffect(() => {
    const fetch = async () => {
      try {
        await Permissions.askAsync(Permissions.LOCATION);
        // await photoFireStore.getAllPhotoList().then((documentSnapshot) => {
        //   documentSnapshot.forEach((value) => {
        //     dispatch(setAllPhotoListData(value.data()));
        //   });
        // });
        await photoFireStore.getAllPhotoList().then((res) => {
          dispatch(setAllPhotoListData(res));
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
    <Home
      navigation={navigation}
      region={region}
      allPhotoList={allPhotoList}
      myPhotoList={myPhotoDataList}
    />
  );
};

export default ContainerHome;
