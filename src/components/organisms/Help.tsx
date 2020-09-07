import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import HelpHeading from "../atoms/HelpHeading";

const Help: FC = () => {
  return (
    <View style={styles.container}>
      <HelpHeading heading="注意事項" />
      <HelpHeading heading="よくある質問" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Help;
