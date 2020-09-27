import React, { FC, useState, useEffect } from "react";
import { ImageSourcePropType } from "react-native";
import { useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { Timestamp } from "@google-cloud/firestore";
import { RootState } from "../../reducers/index";
import { photoFireStore } from "../../firebase/photoFireStore";
import { squeezeSpot } from "../../utilities/spot";
import PickUp from "../../components/organisms/PickUp";

type PickUpScreenNavigationProp = StackNavigationProp<
  PickUpScreenStackParamList,
  "detail"
>;

type PickUpDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
};

type PickUpItemList = {
  title: string;
  time: string;
  url: ImageSourcePropType;
  pickUpDataList: PickUpDataList[];
};

type Props = {
  navigation: PickUpScreenNavigationProp;
};

const PickUpContainer: FC<Props> = ({ navigation }) => {
  const [pickUpDataList, setPickUpDataList] = useState<PickUpDataList[]>([]);

  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );

  useEffect(() => {
    photoFireStore.getPhotoList("ZTrOCwegHXOYUrPa2OfRXxlOXpt2").then((res) => {
      res && setPickUpDataList(res);
    });
  }, []);

  const pickUpItemList: PickUpItemList[] = [
    {
      title: "渋谷周辺の夜景 9選",
      time: "2020/09/27",
      url: require("../../../assets/images/shibuya.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "shibuya"),
    },
    {
      title: "レインボーブリッジ周辺の夜景 5選",
      time: "2020/09/27",
      url: require("../../../assets/images/rainbowBridg.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "rainbowBridge"),
    },
    {
      title: "日本全国の夜景 6選",
      time: "2020/09/27",
      url: require("../../../assets/images/japan.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "japan"),
    },
    {
      title: "スカイツリー周辺の夜景 7選",
      time: "2020/09/27",
      url: require("../../../assets/images/skytree.jpg"),
      pickUpDataList: squeezeSpot(pickUpDataList, "skytree"),
    },
  ];

  return (
    <PickUp
      navigation={navigation}
      pickUpItemList={pickUpItemList}
      bottomHeight={bottomHeight}
    />
  );
};

export default PickUpContainer;
