import React, { FC } from "react";
import { View } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabParamList } from "../../../index";
import { StackParamList } from "../../../index";

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Region } from "../../../entities/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reducers/index";
import { PhotoData } from "../../../entities/index";

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<StackParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
  region: Region;
  allPhotoList: any;
};

//主に見た目に関する記述はこのファイル
const Home: FC<Props> = ({ ...props }) => {
  const { navigation, region, allPhotoList } = props;

  const selectAllPhotoDataList = (state: RootState) => state.allPhotoReducer;
  const photoDataList = useSelector(selectAllPhotoDataList);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={region}
        onClusterPress={(cluster, markers) => {
          markers?.forEach((value) => {
            console.log(value["properties"]);
          });
        }}
        preserveClusterPressBehavior={true}
      >
        {allPhotoList["allPhotoDataList"].map((data) => {
          console.log(data);
          return (
            <Marker
              id={data.userID}
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
            ></Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Home;
