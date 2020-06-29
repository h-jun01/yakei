import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
  LayoutAnimation,
} from "react-native";

const App = () => {
  const stateArray = ["normal", "press", "active", "pressActive"];
  const [index, setIndex] = useState(0);
  const [buttonState, setButtonState] = useState(stateArray[0]);

  const changeStyle = () => {
    // LayoutAnimation.spring();
    const newIndex = (index + 1) % 4;
    setIndex(newIndex);
    setButtonState(stateArray[newIndex]);
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.whiteWrap} />
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
          // onPress={changeStyle}
          onPressIn={changeStyle}
          onPressOut={changeStyle}
        >
          <Text
            style={[
              buttonState === "normal" ? styles.normalButtonText : null,
              buttonState === "press" ? styles.pressButtonText : null,
              buttonState === "active" || buttonState === "pressActive"
                ? styles.activeButtonText
                : null,
            ]}
          >
            +
          </Text>
        </TouchableHighlight>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View>
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
    bottom: 4,
    color: "#000",
    fontSize: 38,
  },
  pressButtonText: {
    bottom: 4,
    color: "#fff",
    fontSize: 38,
  },
  activeButtonText: {
    transform: [{ rotate: "45deg" }],
    bottom: 2,
    left: 4,
    color: "#fff",
    fontSize: 38,
  },
});

export default App;
