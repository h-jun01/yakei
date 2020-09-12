import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const ReportComplete: FC = () => {
  return (
    <View>
      <SimpleLineIcons
        name="check"
        size={32}
        style={styles.reportCompleteIcon}
      />
      <Text style={styles.reportCompleteThanks}>
        ご報告ありがとうございます。
      </Text>
      <View style={styles.reportCompleteTextWrap}>
        <Text style={styles.reportCompleteText}>
          いただいた情報は、YAKEIコミュニティをより安全なものにするために役立たせていただきます。
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reportCompleteIcon: {
    color: "#00B300",
    textAlign: "center",
    paddingVertical: hp("1.2%"),
  },
  reportCompleteThanks: {
    fontSize: Size.NormalL,
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: hp("1.2%"),
  },
  reportCompleteTextWrap: {
    alignItems: "center",
  },
  reportCompleteText: {
    width: deviceWidth / 1.07,
    color: baseColor.iconGray,
    textAlign: "center",
  },
});

export default ReportComplete;
