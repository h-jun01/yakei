import React, { FC, useState, useRef } from "react";
import { RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import Faq from "../../components/organisms/Faq";

type YAxis = {
  yAxis: number;
};

type Props = {
  route: RouteProp<Record<string, YAxis>, string>;
};

const FaqContainer: FC<Props> = ({ route }) => {
  const yAxis = route.params.yAxis;
  const scrollViewRef = useRef<ScrollView>(null);

  const _handleOpenWithLinking = () => {
    Linking.openURL("mailto:teamyakei@gmail.com?subject=【退会申請】").catch(
      () => {
        callingAlert(
          "メールを開くことができませんでした。退会申請の宛先はこちらになります。teamyakei@gmail.com"
        );
      }
    );
  };

  return (
    <Faq
      scrollViewRef={scrollViewRef}
      _handleOpenWithLinking={_handleOpenWithLinking}
      yAxis={yAxis}
    />
  );
};

export default FaqContainer;
