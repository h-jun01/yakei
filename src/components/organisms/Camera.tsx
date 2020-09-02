import React, { FC } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

type Props = {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  hasPermission: boolean | null;
};

const CameraComponent: FC<Props> = ({ ...props }) => {
  const { type, setType, hasPermission } = props;

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
