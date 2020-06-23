import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
// import MapView from "react-native-maps";

const ITEM_WIDTH = Dimensions.get("window").width;

const App = () => {
  const state = {
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  };
  return (
    <SafeAreaView style={styles.lap}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>清水寺</Text>
      </View>
      <FlatList
        style={styles.main}
        data={state.list}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: "https://source.unsplash.com/random" }}
              style={styles.imageStyle}
            />
          </View>
        )}
      />
      {/* <Image style={styles.tinyLogo} source={require("./assets/test.png")} /> */}
      <View style={styles.bottomNav}>
        <Text>テスト</Text>
        <Text>テスト</Text>
        <Text style={styles.bottomNavCenter}>テスト</Text>
        <Text>テスト</Text>
        <Text>テスト</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lap: {
    backgroundColor: "#000",
    flex: 1,
  },
  header: {
    height: 70,
    borderWidth: 1,
    borderBottomColor: "#FF8016",
  },
  headerTitle: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 70,
    fontSize: 17,
    fontWeight: "bold",
  },
  main: {
    marginBottom: 50,
  },
  imageStyle: {
    width: ITEM_WIDTH / 3,
    height: ITEM_WIDTH / 3,
    margin: 1,
    resizeMode: "cover",
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
  bottomNavCenter: {
    height: 120,
    lineHeight: 60,
    borderWidth: 30,
    borderRadius: 45,
    overflow: "hidden",
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});

export default App;
