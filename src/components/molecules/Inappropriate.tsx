import React, { FC } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
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

const Inappropriate: FC<Props> = ({ navigation, route }) => {
  const photo_id = route.params.photo_id;
  console.log(photo_id);

  return (
    <View style={styles.container}>
      <ReportDescription />
      <ScrollView>
        <ReportEntry
          entry="ヌードまたは性的行為"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="ヘイトスピーチまたは差別的なシンボル"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="暴力または危険な団体"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="違法または規制対象商品"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="いじめまたは嫌がらせ"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="知的財産権の侵害"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="自殺、自傷行為、摂食障害"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="詐欺・欺瞞"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="虚偽の情報"
          navigation={navigation}
          photo_id={photo_id}
        />
        <ReportEntry
          entry="単に気に入らない"
          navigation={navigation}
          photo_id={photo_id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
});

export default Inappropriate;
