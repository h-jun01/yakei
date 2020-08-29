import React, { FC, useState, useEffect } from "react";
import { ImageSourcePropType } from "react-native";
import { photoFireStore } from "../../firebase/photoFireStore";
import { squeezeSpot } from "../../utilities/spot";
import PickUp from "../../components/organisms/PickUp";

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
  const [pickUpDataList, setPickUpDataList] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  useEffect(() => {
    photoFireStore.getPhotoList("H1SPCQRDWKTYzoO1ceIVxkwaSR52").then((res) => {
      res && setPickUpDataList(res);
    });
  }, []);

  // スポット毎に抽出
  const shibuyaPhotoList = squeezeSpot(pickUpDataList, "shibuya");
  const rainbowBridgePhotoList = squeezeSpot(pickUpDataList, "rainbowBridge");
  const japanPhotoList = squeezeSpot(pickUpDataList, "japan");
  const skytreePhotoList = squeezeSpot(pickUpDataList, "skytree");

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
      pickUpDataList: japanPhotoList,
    },
    {
      title: "スカイツリー周辺の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/skytree.jpg"),
      pickUpDataList: skytreePhotoList,
    },
  ];

  return <PickUp navigation={navigation} pickUpItemList={pickUpItemList} />;
};

export default PickUpContainer;
