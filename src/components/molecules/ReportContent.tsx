import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import ReportDescription from "../atoms/ReportDescription";
import ReportEntry from "../atoms/ReportEntry";

type Props = {
  navigation: any;
};

const ReportContent: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <ReportDescription />
      <ReportEntry
        entry="スパムである"
        navigation={() => navigation.navigate("spam")}
      />
      <ReportEntry
        entry="不適切である"
        navigation={() => navigation.navigate("inappropriate")}
      />
    </View>
  );
};

export default ReportContent;
