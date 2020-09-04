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
    photoFireStore.getPhotoList("ZTrOCwegHXOYUrPa2OfRXxlOXpt2").then((res) => {
      res && setPickUpDataList(res);
    });
  }, []);

  const pickUpItemList: PickUpItemList[] = [
    {
      title: "渋谷周辺の夜景 9選",
      time: "2020/09/01",
      url: require("../../../assets/images/shibuya.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "shibuya"),
    },
    {
      title: "レインボーブリッジ周辺の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/rainbowBridg.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "rainbowBridge"),
    },
    {
      title: "日本全国の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/japan.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "japan"),
    },
    {
      title: "スカイツリー周辺の夜景 7選",
      time: "2020/09/01",
      url: require("../../../assets/images/skytree.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "skytree"),
    },
  ];

  return <PickUp navigation={navigation} pickUpItemList={pickUpItemList} />;
};

export default PickUpContainer;
