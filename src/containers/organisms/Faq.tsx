import React, { FC, useRef } from "react";
import { RouteProp } from "@react-navigation/native";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import Faq from "../../components/organisms/Faq";

type FaqScreenRouteProp = RouteProp<UserScreenStackParamList, "faq">;

type Props = {
  route: FaqScreenRouteProp;
};

const FaqContainer: FC<Props> = ({ route }) => {
  const yAxis = route.params.yAxis;
  const scrollViewRef = useRef<ScrollView>(null);
  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );

  const _handleOpenWithLinking = () => {
    Linking.openURL(
      "mailto:teamyakei@gmail.com?subject=【退会申請】"
    ).catch(() =>
      callingAlert(
        "メールを開くことができませんでした。退会申請の宛先はこちらになります。teamyakei@gmail.com"
      )
    );
  };

  return (
    <Faq
      scrollViewRef={scrollViewRef}
      _handleOpenWithLinking={_handleOpenWithLinking}
      yAxis={yAxis}
      bottomHeight={bottomHeight}
    />
  );
};

export default FaqContainer;
