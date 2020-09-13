import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportContent from "../components/molecules/ReportContent";
import ReportComplete from "../components/molecules/ReportComplete";
import Inappropriate from "../components/molecules/Inappropriate";

export type ReportScreenStackParamList = {
  reportContent: { photo_id: string };
  inappropriate: { photo_id: string };
  reportComplete: undefined;
  sexualAct: undefined;
};

type Props = {
  photo_id: string;
};

const ReportScreen: FC<Props> = ({ photo_id }) => {
  const Stack = createStackNavigator<ReportScreenStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reportContent"
        component={ReportContent}
        initialParams={{ photo_id }}
        options={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="inappropriate"
        component={Inappropriate}
        initialParams={{ photo_id }}
        options={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="reportComplete"
        component={ReportComplete}
        options={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ReportScreen;
