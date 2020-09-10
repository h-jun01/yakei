import React, { FC, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Container } from "native-base";
import { Timestamp } from "@google-cloud/firestore";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { photoFireStore } from "../../firebase/photoFireStore";
import { accountFireStore } from "../../firebase/accountFireStore";
import { baseColor } from "../../styles/thema/colors";
import MapView from "react-native-map-clustering";
import UserSwitchButtonView from "./UserSwitchButton";
import LocationButtonView from "./PresentLocationButton";
import OriginMarker from "../atoms/OriginMarker";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
};

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Props = {
  navigation: any;
  region: Region;
  allPhotoList: firebase.firestore.DocumentData[];
  myPhotoList: firebase.firestore.DocumentData[];
};

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

let mapIndex = 0;
let regionTimeout;
let _map;
let nowLatitudeDelta;
let nowLongitudeDelta;

const Home: FC<Props> = ({ ...props }) => {
  const { navigation, region, allPhotoList, myPhotoList } = props;
  const [photoDisplayFlag, setPhotoDisplayFlag] = useState(true);
  const [photoSnapFlag, setPhotoSnapFlag] = useState(false);
  const [photoPinFlag, setPhotoPinFlag] = useState(false);
  const [postUserName, setPostUserName] = useState<string>("");
  const [photoSnapList, setPhotoSnapList] = useState<any>();
  const mapAnimation = useRef(new Animated.Value(0)).current;

  _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  // photoSnap参考資料　https://www.youtube.com/watch?v=2vILzRmEqGI
  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (photoSnapList) {
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
  });

  // 地図移動時付近1マイルの情報取得
  const handleRegionChange = async (region: Region) => {
    if (photoPinFlag) {
      nowLatitudeDelta = region.latitudeDelta;
      nowLongitudeDelta = region.longitudeDelta;
      if (region.longitudeDelta < 0.2) {
        await photoFireStore
          .getAreaPhotoList(region.latitude, region.longitude)
          .then((res) => {
            if (res.length === 0) {
              setPhotoSnapFlag(false);
            } else {
              setPhotoSnapFlag(true);
              setPhotoSnapList(res);
            }
          });
      } else {
        setPhotoSnapFlag(false);
      }
    }
    setPhotoPinFlag(true);
  };

  // ピンが押された時
  const onPressPin = async (data) => {
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
      {/* 全員 */}
      {photoDisplayFlag && (
        <MapView
          ref={_map}
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
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
        >
          {allPhotoList !== undefined &&
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
        </MapView>
      )}
      {/* 利用ユーザー */}
      {!photoDisplayFlag && (
        <MapView
          ref={_map}
          style={{ ...StyleSheet.absoluteFillObject }}
          clusterColor="#ff0000"
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
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
        >
          {myPhotoList !== undefined &&
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
      )}
      {photoSnapFlag && (
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
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
            photoSnapList.map((data) => {
              accountFireStore
                .getUserName(data.uid)
                .then((res: React.SetStateAction<string>) => {
                  res && setPostUserName(res);
                })
                .catch(() => {
                  setPostUserName("Anonymous");
                });
              return (
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    const photoDataList: PhotoDataList[] = [];
                    photoDataList.push(data);
                    navigation.navigate("post", {
                      imageData: {
                        photo_id: data.photo_id,
                        uid: data.uid,
                        create_time: data.create_time,
                        url: data.url,
                        latitude: data.latitude,
                        longitude: data.longitude,
                        photogenic_subject: data.photogenic_subject,
                      },
                    });
                  }}
                  key={data.photo_id}
                  style={styles.card}
                >
                  <Image
                    source={{
                      uri: data.url,
                    }}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.cardText}>
                    {postUserName}
                    <Text style={styles.cardTextSub}>さんの投稿</Text>
                  </Text>
                </TouchableOpacity>
              );
            })}
        </Animated.ScrollView>
      )}
      <UserSwitchButtonView
        onPressIcon={() => {
          setPhotoDisplayFlag(!photoDisplayFlag);
        }}
        photoDisplayFlag={photoDisplayFlag}
        photoSnapFlag={photoSnapFlag}
      />
      <LocationButtonView
        onPressIcon={() => {
          _map.current.animateToRegion(region);
        }}
        photoSnapFlag={photoSnapFlag}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: baseColor.darkNavy,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    height: CARD_HEIGHT - 50,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
  cardText: {
    fontSize: 17,
    color: baseColor.text,
    fontWeight: "bold",
    padding: 15,
  },
  cardTextSub: {
    fontWeight: "normal",
  },
});
export default Home;
