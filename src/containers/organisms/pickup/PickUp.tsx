import React, { FC, useState, useEffect } from "react";
import { photoFireStore } from "../../../firebase/photoFireStore";
import { squeezeSpot } from "../../../utilities/spot";
import PickUp from "../../../components/organisms/pickup/PickUp";
import geohash from "ngeohash";

type PickUpItemList = {
  title: string;
  time: string;
  url: string;
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

  const pickUpItemList: PickUpItemList[] = [
    {
      title: "渋谷周辺の夜景 9選",
      time: "2020-09-01",
      url:
        "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/pickup%2Fshibuya%2Fshibuya01.jpg?alt=media&token=e59c6714-591e-4704-944a-1aad3b604222",
      pickUpDataList: shibuyaPhotoList,
    },
    {
      title: "レインボーブリッジ周辺の夜景 7選",
      time: "2020-09-01",
      url:
        "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/pickup%2FrainbowBridge%2Frainbow-bridge01.jpg?alt=media&token=1c9a4975-90ee-445a-ba97-1749a3615392",
      pickUpDataList: rainbowBridgePhotoList,
    },
    {
      title: "日本全国の夜景 7選",
      time: "2020-09-01",
      url:
        "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/pickup%2Fjapan%2Fjapan06.jpg?alt=media&token=df4db95c-9c92-4907-a288-56353e2cf51a",
      pickUpDataList: shibuyaPhotoList,
    },
    {
      title: "スカイツリー周辺の夜景 7選",
      time: "2020-09-01",
      url:
        "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/pickup%2Fskytree%2Fskytree08.jpg?alt=media&token=0da1e79b-4da9-4ff2-b460-d51c34f211cb",
      pickUpDataList: shibuyaPhotoList,
    },
  ];

  return <PickUp navigation={navigation} pickUpItemList={pickUpItemList} />;
};

export default PickUpContainer;
