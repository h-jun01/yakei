import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import SettingItem from "../../containers/molecules/SettingItem";

type Props = {
  navigation: any;
};

const Setting: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SettingItem navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: baseColor.base,
  },
});

export default Setting;
