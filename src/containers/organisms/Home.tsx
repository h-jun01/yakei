import React, { FC, useEffect, useState } from "react";
import Home from "../../components/organisms/Home";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { photoFireStore } from "../../firebase/photoFireStore";
import { useSelector, useDispatch } from "react-redux";
import { setAllPhotoListData } from "../../actions/allPhoto";
import { RootState } from "../../reducers/index";

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
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;
  const selectPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;

  const allPhotoList = useSelector(selectAllPhotoDataList);
  const myPhotoDataList = useSelector(selectPhotoDataList);
  const bottomHeight = useSelector(selectBottomHeight);

  const [region, setRegion] = useState({
    latitude: 35.6340873,
    longitude: 139.525187,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

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
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      } catch (error) {
        // to do
      }
    };
    fetch();
  }, []);

  return (
    <Home
      navigation={navigation}
      allPhotoList={allPhotoList}
      myPhotoList={myPhotoDataList}
      bottomHeight={bottomHeight}
    />
  );
};

export default ContainerHome;
