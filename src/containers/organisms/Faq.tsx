import React, { FC } from "react";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import Faq from "../../components/organisms/Faq";

const FaqContainer: FC = () => {
  const _handleOpenWithLinking = () => {
    Linking.openURL("mailto:teamyakei@gmail.com?subject=【退会申請】").catch(
      () => {
        callingAlert(
          "メールを開くことができませんでした。退会申請の宛先はこちらになります。teamyakei@gmail.com"
        );
      }
    );
  };
  return <Faq _handleOpenWithLinking={_handleOpenWithLinking} />;
};

export default FaqContainer;
