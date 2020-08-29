import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Icon } from "native-base";
import BottomNav from "./BottomNav";
// 地図の右上に表示する用のコンポーネント(FC)
const LocationButtonView: React.FC<{
  onPressIcon: () => void;
  photoDisplayFlag: boolean;
  photoSnapFlag: boolean;
}> = (props: {
  onPressIcon: () => void;
  photoDisplayFlag: boolean;
  photoSnapFlag: boolean;
}) => {
  return (
    <View style={{ position: "absolute", right: "0%", bottom: "0%" }}>
      <Button
        style={
          props.photoSnapFlag
            ? styles.buttonBoxHaveSnap
            : styles.buttonBoxDefault
        }
        onPress={props.onPressIcon}
      >
        {props.photoDisplayFlag ? (
          <Icon style={styles.userIcon} type="FontAwesome5" name="user" />
        ) : (
          <Icon style={styles.usersIcon} type="FontAwesome5" name="users" />
        )}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBoxDefault: {
    position: "absolute",
    right: 10,
    bottom: 100,
    width: 55,
    height: 55,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#1B2441",
    padding: 0,
  },
  buttonBoxHaveSnap: {
    position: "absolute",
    right: 10,
    bottom: 300,
    width: 55,
    height: 55,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#1B2441",
    padding: 0,
  },
  userIcon: {
    fontSize: 27,
  },
  usersIcon: {
    fontSize: 19,
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
