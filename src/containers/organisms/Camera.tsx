import React, { FC, useState, useEffect } from "react";
import { Camera } from "expo-camera";
import CameraComponent from "../../components/organisms/Camera";

const CameraContainer: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<string>(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <CameraComponent
      type={type}
      setType={setType}
      hasPermission={hasPermission}
    />
  );
};

export default CameraContainer;
