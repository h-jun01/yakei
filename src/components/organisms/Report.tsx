import React, { FC, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Report: FC = ({ children }) => {
  return (
    <Fragment>
      <Text style={styles.heading}>報告</Text>
      <View style={styles.border} />
      {children}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: Size.Large,
    fontWeight: "500",
    textAlign: "center",
    paddingVertical: hp("1.4%"),
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: baseColor.iconGray,
  },
});

export default Report;
