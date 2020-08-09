import React, { FC, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableHighlight,
} from "react-native";
import ScreenSwitcher from "./ScreenSwitcher";

const App: FC = () => {
  // const stateArray = ["normal", "press", "active", "pressActive"];
  // const [index, setIndex] = useState(0);
  // const [buttonState, setButtonState] = useState(stateArray[0]);
  // const plusToCrossAnim = useRef(new Animated.Value(0)).current;

  // const resetAnimValue = () => plusToCrossAnim.setValue(0);

  // const changeStyle = () => {
  //   const newIndex = (index + 1) % 4;
  //   if (buttonState == "press") {
  //     // press→active
  //     Animated.timing(plusToCrossAnim, {
  //       toValue: 1,
  //       duration: 200,
  //     }).start();
  //   } else if (buttonState == "pressActive") {
  //     // pressActive→normal
  //     Animated.timing(plusToCrossAnim, {
  //       toValue: 2,
  //       duration: 200,
  //     }).start(resetAnimValue);
  //   }
  //   setIndex(newIndex);
  //   setButtonState(stateArray[newIndex]);
  // };

  // // フレーム値0から1、1から2にかけて0degから45degに変化
  // const interPolateRotate = plusToCrossAnim.interpolate({
  //   inputRange: [0, 1, 2],
  //   outputRange: ["0deg", "45deg", "90deg"],
  // });

  // const interPolateTop = plusToCrossAnim.interpolate({
  //   inputRange: [0, 1, 2],
  //   outputRange: [2, 1.85, 1.7],
  // });

  // const interPolateRight = plusToCrossAnim.interpolate({
  //   inputRange: [0, 1, 2],
  //   outputRange: [0, 0.6, 1.2],
  // });

  // const animatedRotateStyle = {
  //   transform: [{ rotate: interPolateRotate }],
  //   top: interPolateTop,
  //   right: interPolateRight,
  // };

  return (
    <SafeAreaView style={styles.wrap}>
      <ScreenSwitcher />
      {/* <View style={styles.whiteWrap} />
      <View style={styles.bottomNavCenterWrap}>
        <View style={styles.bottomNavCenter} />
      </View>
      <View style={styles.bottomNav}>
        <Text>テスト</Text>
        <Text>テスト</Text>
        <TouchableHighlight
          style={[
            styles.buttonWrap,
            buttonState === "normal"
              ? styles.normalButtonWrap
              : styles.activeButtonWrap,
          ]}
          onPressIn={changeStyle}
          onPressOut={changeStyle}
          underlayColor={"black"}
          activeOpacity={0.7}
        >
          <Animated.Text
            style={[
              buttonState === "normal"
                ? styles.normalButtonText
                : styles.activeButtonText,
              animatedRotateStyle,
            ]}
          >
            +
          </Animated.Text>
        </TouchableHighlight>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#000",
    flex: 1,
  },
  whiteWrap: {
    display: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  bottomNavCenterWrap: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomNavCenter: {
    bottom: 7,
    zIndex: 2,
    height: 122,
    width: 122,
    borderWidth: 30,
    borderRadius: 100,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonWrap: {
    bottom: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
    width: 46,
    height: 46,
    borderWidth: 3,
    borderRadius: 23,
  },
  normalButtonWrap: {
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  activeButtonWrap: {
    borderColor: "#000",
    backgroundColor: "#000",
  },
  normalButtonText: {
    lineHeight: 38,
    color: "#000",
    fontSize: 38,
  },
  activeButtonText: {
    lineHeight: 38,
    color: "#fff",
    fontSize: 38,
  },
});

export default App;
