import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Feather from "react-native-vector-icons/Feather";

type Props = {
  entry: string;
  _handleOnPress: () => void;
};

const ReportEntry: FC<Props> = ({ entry, _handleOnPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrap}
        activeOpacity={1}
        onPress={() => _handleOnPress()}
      >
        <Text style={styles.entryText}>{entry}</Text>
        <Feather name="chevron-right" size={20} style={styles.entryIcon} />
      </TouchableOpacity>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  wrap: {
    width: deviceWidth / 1.07,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("2%"),
  },
  entryText: {
    fontSize: Size.Normal,
  },
  entryIcon: {
    color: baseColor.iconGray,
    marginLeft: "auto",
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: baseColor.iconGray,
  },
});

export default ReportEntry;
