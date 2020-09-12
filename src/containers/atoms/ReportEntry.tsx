import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RouteProp } from "@react-navigation/native";
import { RootState } from "../../reducers/index";
import { reportFireStore } from "../../firebase/reportFireStore";
import { ReportScreenStackParamList } from "../../screens/ReportScreen";
import ReportEntry from "../../components/atoms/ReportEntry";

type Props = {
  navigation: any;
  entry: string;
  photo_id: string;
};

const ReportEntryContainer: FC<Props> = ({ ...props }) => {
  const { navigation, entry, photo_id } = props;

  const selectUid = (state: RootState) => state.userReducer.uid;
  const uid = useSelector(selectUid);

  const _handleOnPress = () => {
    if (entry === "不適切である") {
      navigation.navigate("inappropriate");
    } else if (entry === "スパムである") {
      reportFireStore.addReport(uid, photo_id, entry);
      navigation.navigate("reportComplete");
    } else {
    }
  };

  return <ReportEntry entry={entry} _handleOnPress={_handleOnPress} />;
};

export default ReportEntryContainer;
