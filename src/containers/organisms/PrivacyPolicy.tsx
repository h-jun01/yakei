import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { callingAlert } from "../../utilities/alert";
import * as Linking from "expo-linking";
import PrivacyPolicy from "../../components/organisms/PrivacyPolicy";

const PrivacyPolicyContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShouldDisplayBottomNav(false));
    return () => {
      dispatch(setShouldDisplayBottomNav(true));
    };
  }, []);

  const _handleOpenWithLinking = () => {
    Linking.openURL(
      "mailto:teamyakei@gmail.com?subject=【プライバシーポリシーについて】"
    ).catch(() => {
      callingAlert(
        "メールを開くことができませんでした。退会申請の宛先はこちらになります。teamyakei@gmail.com"
      );
    });
  };

  return <PrivacyPolicy _handleOpenWithLinking={_handleOpenWithLinking} />;
};

export default PrivacyPolicyContainer;
