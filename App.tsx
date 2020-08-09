import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ScreenSwitcher from "./ScreenSwitcher";

const App: FC = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <ScreenSwitcher />
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
