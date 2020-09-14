import React, { FC, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { Container } from "native-base";
import { Timestamp } from "@google-cloud/firestore";
import MapViewType, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { photoFireStore } from "../../firebase/photoFireStore";
import { baseColor } from "../../styles/thema/colors";
import * as Location from "expo-location";
import MapView from "react-native-map-clustering";
import UserSwitchButtonView from "./UserSwitchButton";
import LocationButtonView from "./PresentLocationButton";
import OriginMarker from "../atoms/OriginMarker";
import { Region } from "../../entities/map";
import geohash from "ngeohash";
import { mapStyle } from "../../styles/map";
import Card from "../../containers/molecules/Card";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
};

type Props = {
  navigation: any;
  allPhotoList: firebase.firestore.DocumentData[];
  myPhotoList: firebase.firestore.DocumentData[];
  bottomHeight: number;
  region: Region;
  initialRegion: Region | "loading";
};

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

let mapIndex = 0;
let regionTimeout;
let nowLatitudeDelta;
let nowLongitudeDelta;

const Home: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    allPhotoList,
    myPhotoList,
    bottomHeight,
    region,
    initialRegion,
  } = props;
  const [photoDisplayFlag, setPhotoDisplayFlag] = useState(true);
  const [photoSnapFlag, setPhotoSnapFlag] = useState(false);
  const [photoPinFlag, setPhotoPinFlag] = useState(false);
  const [photoSnapList, setPhotoSnapList] = useState<any>([]);
  const [mapState, setMapState] = useState({ isSet: false });
  const mapAnimation = useRef(new Animated.Value(0)).current;
  const _map = React.useRef<MapViewType>(null);

  useEffect(() => {
    if (_map.current === null) return;
    _map.current.animateToRegion(region);
  }, [_map.current]);

  // photoSnapListが更新される度に実行
  useEffect(() => {
    // photoSnap参考資料　https://www.youtube.com/watch?v=2vILzRmEqGI
    const fetch = async () => {
      mapAnimation.addListener(({ value }) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (photoSnapList.length !== 0) {
          if (index >= photoSnapList.length) {
            index = photoSnapList.length - 1;
          }
          if (index <= 0) {
            index = 0;
          }

          clearTimeout(regionTimeout);

          regionTimeout = setTimeout(() => {
            if (mapIndex !== index) {
              mapIndex = index;
              const latitude = photoSnapList[index]["latitude"];
              const longitude = photoSnapList[index]["longitude"];
              const coordinate = {
                latitude,
                longitude,
              };
              if (_map.current === null) return;

              _map.current.animateToRegion(
                {
                  ...coordinate,
                  latitudeDelta: nowLatitudeDelta,
                  longitudeDelta: nowLongitudeDelta,
                },
                350
              );
            }
          }, 10);
        }
      });
    };

    fetch();
  }, [photoSnapList]);

  // 地図移動時付近1マイルの情報取得
  const handleRegionChange = async (region: Region) => {
    if (photoPinFlag) {
      if (region.longitudeDelta < 0.2) {
        nowLatitudeDelta = 0.005;
        nowLongitudeDelta = 0.005;
        await getAreaPhotoList(region.latitude, region.longitude);
        if (photoSnapList.length !== 0) {
          setPhotoSnapFlag(true);
        } else {
          setPhotoSnapFlag(false);
        }
      } else {
        setPhotoSnapFlag(false);
      }
    }
    setPhotoPinFlag(true);
  };

  // 付近の写真を絞り込み
  const getAreaPhotoList = async (latitude: number, longitude: number) => {
    // 1マイル分の緯度経度(1マイル＝1.60934km)
    const lat = 0.0144927536231884;
    const lon = 0.0181818181818182;
    const lowerLat = latitude - lat;
    const lowerLon = longitude - lon;
    const upperLat = latitude + lat;
    const upperLon = longitude + lon;

    const lower = geohash.encode(lowerLat, lowerLon);
    const upper = geohash.encode(upperLat, upperLon);

    setPhotoSnapList(
      photoDisplayFlag
        ? allPhotoList.filter(
            (photo) => photo.geohash > lower && photo.geohash < upper
          )
        : myPhotoList.filter(
            (photo) => photo.geohash > lower && photo.geohash < upper
          )
    );
  };

  // ピンが押された時
  const onPressPin = async (data) => {
    if (_map.current === null) return;
    setPhotoPinFlag(false);
    const latitude = data.latitude;
    const longitude = data.longitude;
    const coordinate = {
      latitude,
      longitude,
    };
    if (nowLatitudeDelta > 0.2) {
      _map.current.animateToRegion(
        {
          ...coordinate,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        },
        350
      );
    } else {
      _map.current.animateToRegion(
        {
          ...coordinate,
          latitudeDelta: nowLatitudeDelta,
          longitudeDelta: nowLongitudeDelta,
        },
        350
      );
    }
    setPhotoSnapList([data]);
    setPhotoSnapFlag(true);
  };

  return (
    <Container>
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
            ref={mapState.isSet ? _map : null}
            // Androidに対応させるために必要
            // 参考: https://stackoverflow.com/a/55684763
            onMapReady={() => setMapState({ isSet: true })}
            style={{ ...StyleSheet.absoluteFillObject }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={initialRegion}
            clusterColor={photoDisplayFlag ? "#00B386" : "#f00"}
            onRegionChangeComplete={handleRegionChange}
            onClusterPress={(cluster, markers) => {
              const photoDataList: PhotoDataList[] = [];
              markers?.forEach((value) => {
                photoDataList.push(value["properties"]["markerDate"]);
              });
              navigation.navigate("detail", {
                photoDataList,
              });
            }}
            preserveClusterPressBehavior={true}
            customMapStyle={mapStyle}
          >
            {/* 全員 */}
            {photoDisplayFlag &&
              allPhotoList.map((data) => {
                return (
                  <OriginMarker
                    key={data.photo_id}
                    markerDate={{
                      photo_id: data.photo_id,
                      uid: data.uid,
                      create_time: data.create_time,
                      url: data.url,
                      favoriteNumber: data.favoriteNumber,
                      latitude: data.latitude,
                      longitude: data.longitude,
                      photogenic_subject: data.photogenic_subject,
                    }}
                    coordinate={{
                      latitude: data.latitude,
                      longitude: data.longitude,
                    }}
                    image={require("../../../assets/pin02.png")}
                    onPress={() => {
                      onPressPin(data);
                    }}
                  ></OriginMarker>
                );
              })}

            {/* 利用ユーザー */}
            {!photoDisplayFlag &&
              myPhotoList.map((data) => {
                return (
                  <OriginMarker
                    key={data.photo_id}
                    coordinate={{
                      latitude: data.latitude,
                      longitude: data.longitude,
                    }}
                    markerDate={{
                      photo_id: data.photo_id,
                      uid: data.uid,
                      create_time: data.create_time,
                      url: data.url,
                      favoriteNumber: data.favoriteNumber,
                      latitude: data.latitude,
                      longitude: data.longitude,
                      photogenic_subject: data.photogenic_subject,
                    }}
                    image={require("../../../assets/pin02.png")}
                    onPress={() => {
                      onPressPin(data);
                    }}
                  ></OriginMarker>
                );
              })}
          </MapView>

          {photoSnapFlag && (
            <Animated.ScrollView
              horizontal
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              style={[styles.scrollView, { bottom: bottomHeight }]}
              pagingEnabled
              snapToInterval={CARD_WIDTH + 20}
              snapToAlignment="center"
              contentInset={{
                top: 0,
                left: SPACING_FOR_CARD_INSET,
                bottom: 0,
                right: SPACING_FOR_CARD_INSET,
              }}
              contentContainerStyle={{
                paddingHorizontal:
                  Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
              }}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        x: mapAnimation,
                      },
                    },
                  },
                ],
                {
                  useNativeDriver: true,
                }
              )}
            >
              {photoSnapList &&
                photoSnapList.map((data, index) => {
                  return (
                    <Card key={index} navigation={navigation} data={data} />
                  );
                })}
            </Animated.ScrollView>
          )}
          <UserSwitchButtonView
            onPressIcon={() => {
              setPhotoDisplayFlag(!photoDisplayFlag);
              setPhotoSnapFlag(false);
            }}
            photoDisplayFlag={photoDisplayFlag}
            photoSnapFlag={photoSnapFlag}
          />
          <LocationButtonView
            onPressIcon={() => {
              if (_map.current === null) return;
              _map.current.animateToRegion(region);
            }}
            photoSnapFlag={photoSnapFlag}
          />
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
});
export default Home;
