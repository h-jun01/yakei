import React, { FC, useState, useEffect } from "react";
import { photoFireStore } from "../../../firebase/photoFireStore";
import { squeezeSpot } from "../../../utilities/spot";
import PickUp from "../../../components/organisms/pickup/PickUp";
import geohash from "ngeohash";

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

  return <PickUp />;
};

export default PickUpContainer;
