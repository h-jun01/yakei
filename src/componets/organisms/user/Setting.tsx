import React, { FC } from "react";
import { View } from "react-native";
import { UserScreenNavigationProp } from "./User";
import { styles } from "../../../styles/user/setting";
import SettingItem from "../../../containers/molecules/SettingItem";

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

export default Setting;
