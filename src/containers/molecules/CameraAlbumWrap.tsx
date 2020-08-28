import React, { FC } from "react";
import CameraAlbumWrap from "../../components/molecules/CameraAlbumWrap";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";

const CameraAlbumWrapContainer: FC = () => {
  const shoulappear = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.shouldAppear
  );

  return <CameraAlbumWrap shouldAppear={shoulappear} />;
};

export default CameraAlbumWrapContainer;
