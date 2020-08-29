import React, { FC, useState, useEffect } from "react";
import { ImageSourcePropType } from "react-native";
import { photoFireStore } from "../../firebase/photoFireStore";
import { squeezeSpot } from "../../utilities/spot";
import PickUp from "../../components/organisms/PickUp";
import geohash from "ngeohash";

type PickUpItemList = {
  title: string;
  time: string;
  url: ImageSourcePropType;
  pickUpDataList: firebase.firestore.DocumentData[];
};

type Props = {
  navigation: any;
};

const PickUpContainer: FC<Props> = ({ navigation }) => {
  // console.log(geohash.encode(35.628803, 139.774206));
  const [pickUpDataList, setPickUpDataList] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  // 運営が投稿した画像を取得
  useEffect(() => {
    photoFireStore.getPhotoList("H1SPCQRDWKTYzoO1ceIVxkwaSR52").then((res) => {
      res && setPickUpDataList(res);
    });
  }, []);

  // スポット毎に抽出
  const shibuyaPhotoList = squeezeSpot(pickUpDataList, "shibuya");
  const rainbowBridgePhotoList = squeezeSpot(pickUpDataList, "rainbowBridge");

  // Viewデータ
  const pickUpItemList: PickUpItemList[] = [
    {
      title: "渋谷周辺の夜景 9選",
      time: "2020/09/01",
      url: require("../../../assets/images/shibuya.jpg"),
      pickUpDataList: shibuyaPhotoList,
    },
    {
      title: "レインボーブリッジ周辺の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/rainbowBridg.jpg"),
      pickUpDataList: rainbowBridgePhotoList,
    },
    {
      title: "日本全国の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/japan.jpg"),
      pickUpDataList: shibuyaPhotoList,
    },
    {
      title: "スカイツリー周辺の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/skytree.jpg"),
      pickUpDataList: shibuyaPhotoList,
    },
  ];

  return <PickUp navigation={navigation} pickUpItemList={pickUpItemList} />;
};

export default PickUpContainer;
