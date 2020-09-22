import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import SettingItem from "../../containers/molecules/SettingItem";

type UserScreenNavigationProp = StackNavigationProp<
  UserScreenStackParamList,
  | "editProfile"
  | "passwordReset"
  | "notice"
  | "help"
  | "termsOfService"
  | "privacyPolicy"
>;

type Props = {
  navigation: UserScreenNavigationProp;
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
