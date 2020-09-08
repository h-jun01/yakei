import React, { FC, useState, useRef } from "react";
import { ScrollView } from "react-native";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import Faq from "../../components/organisms/Faq";

const FaqContainer: FC = () => {
  const [elementHeight, setElementHright] = useState<number>(0);
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

  const onLayout = (e) => {
    setElementHright(e.nativeEvent.layout.height);
  };

  console.log(elementHeight);

  return (
    <Faq
      elementHeight={elementHeight}
      scrollViewRef={scrollViewRef}
      _handleOpenWithLinking={_handleOpenWithLinking}
      onLayout={onLayout}
    />
  );
};

export default FaqContainer;
