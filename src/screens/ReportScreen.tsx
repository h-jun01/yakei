import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReportContent from "../components/molecules/ReportContent";
import ReportComplete from "../components/molecules/ReportComplete";
import Inappropriate from "../components/molecules/Inappropriate";

type ReportScreenStackParamList = {
  reportContent: undefined;
  inappropriate: undefined;
  reportComplete: undefined;
};

const ReportScreen: FC = () => {
  const Stack = createStackNavigator<ReportScreenStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reportContent"
        component={ReportContent}
        options={{
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="inappropriate"
        component={Inappropriate}
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
