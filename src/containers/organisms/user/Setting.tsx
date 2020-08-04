import React, { FC } from "react";
import Setting from "../../../componets/organisms/user/Setting";
import { UserScreenNavigationProp } from "../../../componets/organisms/user/User";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerSetting: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  return <Setting navigation={navigation} />;
};

export default ContainerSetting;
