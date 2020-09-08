import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import TermsOfService from "../../components/organisms/TermsOfService";

const TermsOfServiceContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShouldDisplayBottomNav(false));
    return () => {
      dispatch(setShouldDisplayBottomNav(true));
    };
  }, []);

  const _handleOpenWithLinking = () => {
    Linking.openURL(
      "mailto:teamyakei@gmail.com?subject=【利用規約について】"
    ).catch(() => {
      callingAlert(
        "メールを開くことができませんでした。退会申請の宛先はこちらになります。teamyakei@gmail.com"
      );
    });
  };

  return <TermsOfService _handleOpenWithLinking={_handleOpenWithLinking} />;
};

export default TermsOfServiceContainer;
