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
} from "react-native";

const App = () => {
  const normalButtonText = {
    bottom: 4,
    color: "#000",

    fontSize: 38,
  };
  const pressButtonText = {
    bottom: 4,
    color: "#fff",
    fontSize: 38,
  };
  const pactiveButtonText = {
    transform: [{ rotate: "45deg" }],
    bottom: 2,
    left: 4,
    color: "#fff",
    fontSize: 38,
  };
  const normalButtonWrap = {
    borderColor: "#000",
    backgroundColor: "#fff",
  };
  const activeButtonWrap = {
    borderColor: "#000",
    backgroundColor: "#000",
  };
  const [buttonStyles, setButtonStyles] = useState({
    buttonStyle: normalButtonText,
  });
  const [buttonWrapStyles, setButtonWrapStyles] = useState({
    buttonWrapStyle: normalButtonWrap,
  });
  const [buttonState, setButtonState] = useState("normal");

  const changeStyle = () => {
    switch (buttonState) {
      case "normal":
        setButtonStyles({ buttonStyle: pressButtonText });
        setButtonState("press");
        break;
      case "press":
        setButtonStyles({ buttonStyle: pactiveButtonText });
        setButtonWrapStyles({ buttonWrapStyle: activeButtonWrap });
        setButtonState("active");
        break;
      case "active":
        setButtonState("pressActive");
        break;
      default:
        // case 'pressActive'
        setButtonStyles({ buttonStyle: normalButtonText });
        setButtonWrapStyles({ buttonWrapStyle: normalButtonWrap });
        setButtonState("normal");
    }
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
          style={[styles.buttonWrap, buttonWrapStyles.buttonWrapStyle]}
          // onPress={changeStyle}
          onPressIn={changeStyle}
          onPressOut={changeStyle}
        >
          <Text style={buttonStyles.buttonStyle}>+</Text>
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
});

export default App;
