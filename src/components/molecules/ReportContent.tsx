import React, { FC } from "react";
import { View } from "react-native";
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
        navigation={() => navigation.navigate("reportComplete")}
      />
      <ReportEntry
        entry="不適切である"
        navigation={() => navigation.navigate("inappropriate")}
      />
    </View>
  );
};

export default ReportContent;
