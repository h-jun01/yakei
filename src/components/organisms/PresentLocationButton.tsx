import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Icon } from "native-base";
import BottomNav from "./BottomNav";
// 地図の右上に表示する用のコンポーネント(FC)
const LocationButtonView: React.FC<{ onPressIcon: () => void }> = (props: {
  onPressIcon: () => void;
}) => {
  return (
    <View style={{ position: "absolute", right: "0%", bottom: "20%" }}>
      <Button style={{ margin: 5 }} onPress={props.onPressIcon}>
        <Text>自分(赤)　全員(青)</Text>
        {/* <Icon type="FontAwesome5" name="search" /> */}
      </Button>
    </View>
  );
};

export default LocationButtonView;
