export const squeezeSpot = (
  pickUpDataList: firebase.firestore.DocumentData[],
  spot: string
): firebase.firestore.DocumentData[] => {
  return pickUpDataList.filter((res) => res.spot === spot);
};
