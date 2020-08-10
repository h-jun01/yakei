import React, { FC } from "react";
import Setting from "../../../components/organisms/user/Setting";
import { UserScreenNavigationProp } from "../../../components/organisms/user/User";

type Props = {
  navigation: UserScreenNavigationProp;
};

const ContainerSetting: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  return <Setting navigation={navigation} />;
};

export default ContainerSetting;
