import React, { FC } from "react";
import { accountFireStore } from "../../firebase/accountFireStore";
import { UserScreenNavigationProp } from "../../componets/user/User";
import Setting from "../../componets/user/Setting";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerSetting: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  return (
    <Setting
      signOutUser={accountFireStore.signOutUser}
      navigation={navigation}
    />
  );
};

export default ContainerSetting;
