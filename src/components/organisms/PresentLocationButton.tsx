import React from "react";
import { Platform, PlatformIOSStatic, StyleSheet } from "react-native";
import { Text, View, Button, Icon } from "native-base";
import { BoxShadow } from "react-native-shadow";
import BottomNav from "./BottomNav";

// 地図の右上に表示する用のコンポーネント(FC)
const LocationButtonView: React.FC<{
  onPressIcon: () => void;
  photoSnapFlag: boolean;
}> = (props: { onPressIcon: () => void; photoSnapFlag: boolean }) => {
  const shadowOpt = {
    width: 50,
    height: 50,
    color: "#aaa",
    border: 4,
    radius: 25,
    opacity: 0.6,
    x: 2.5,
    y: 2.5,
    style: props.photoSnapFlag
      ? styles.boxShadowHaveSnap
      : styles.boxShadowDefault,
  };

  return (
    <View style={{ position: "absolute", right: "0%", bottom: "0%" }}>
      <BoxShadow setting={shadowOpt}>
        <Button style={styles.buttonBox} onPress={props.onPressIcon}>
          <Icon
            style={styles.crosshairsIcon}
            type="FontAwesome5"
            name="crosshairs"
          />
        </Button>
      </BoxShadow>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  boxShadowDefault: {
    position: "absolute",
    right: 20,
    bottom: platformIOS.isPad ? 200 : 100,
  },
  boxShadowHaveSnap: {
    position: "absolute",
    right: 20,
    bottom: platformIOS.isPad ? 430 : 300,
  },
  buttonBox: {
    position: "absolute",
    width: 55,
    height: 55,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#1B2441",
    padding: 0,
  },
  crosshairsIcon: {
    fontSize: 24,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
  cardText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    padding: 15,
  },
  cardTextSub: {
    fontWeight: "normal",
  },
});

export default LocationButtonView;
