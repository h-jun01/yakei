export const squeezeSpot = (
  pickUpDataList: firebase.firestore.DocumentData[],
  spot: string
) => {
  return pickUpDataList.filter((res) => {
    return res.spot === spot;
  });
};
