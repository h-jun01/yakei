import { Timestamp } from "@google-cloud/firestore";

type PickUpDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  img_index: string;
  spot?: string;
};

export const squeezeSpot = (
  pickUpDataList: PickUpDataList[],
  spot: string
): PickUpDataList[] => {
  return pickUpDataList.filter((res) => res.spot === spot);
};
