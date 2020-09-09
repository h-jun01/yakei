import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SelectedText: FC = () => {
  return (
    <View style={styles.borderBox}>
      <View style={styles.borderItem} />
      <Text style={styles.orText}>または</Text>
      <View style={styles.borderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  borderBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: wp("3%"),
  },
  orText: {
    color: baseColor.text,
    paddingHorizontal: wp("8%"),
    fontSize: Size.Small,
  },
  borderItem: {
    width: wp("25%"),
    height: 1,
    borderWidth: 0.3,
    borderColor: utilityColor.border,
    opacity: 0.5,
  },
});

export default SelectedText;
