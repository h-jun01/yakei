import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { Size } from "../../styles/thema/fonts";
import { baseColor } from "../../styles/thema/colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ReportDescription: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>この投稿を報告する理由</Text>
      <Text style={styles.reportText}>
        どのアクションを実行しても、相手に通知されることはありません。差し迫った危険に直面する人がいる場合は、今すぐ地域の警察または消防機関に緊急通報してください。
      </Text>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subtitle: {
    width: deviceWidth / 1.07,
    fontWeight: "700",
    fontSize: Size.NormalL,
    paddingVertical: hp("1.5%"),
  },
  reportText: {
    width: deviceWidth / 1.07,
    fontSize: Size.NormalS,
    color: baseColor.iconGray,
    paddingBottom: hp("1.5%"),
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: baseColor.iconGray,
  },
});

export default ReportDescription;
