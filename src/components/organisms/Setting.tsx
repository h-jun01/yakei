import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/user/setting";
import SettingItem from "../../containers/molecules/SettingItem";
import { accountFireStore } from "../../firebase/accountFireStore";

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

export default Setting;
