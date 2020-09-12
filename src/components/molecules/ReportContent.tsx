import React, { FC } from "react";
import { View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { ReportScreenStackParamList } from "../../screens/ReportScreen";
import ReportDescription from "../atoms/ReportDescription";
import ReportEntry from "../../containers/atoms/ReportEntry";

type ReportScreenRouteProp = RouteProp<
  ReportScreenStackParamList,
  "reportContent"
>;

type Props = {
  navigation: any;
  route: ReportScreenRouteProp;
};

const ReportContent: FC<Props> = ({ navigation, route }) => {
  const photo_id = route.params.photo_id;

  return (
    <View>
      <ReportDescription />
      <ReportEntry
        navigation={navigation}
        entry="スパムである"
        photo_id={photo_id}
      />
      <ReportEntry
        navigation={navigation}
        entry="不適切である"
        photo_id={photo_id}
      />
    </View>
  );
};

export default ReportContent;
