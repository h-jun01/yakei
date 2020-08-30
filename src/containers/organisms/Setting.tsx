import React, { FC } from "react";
import Setting from "../../components/organisms/Setting";

type Props = {
  navigation: any;
};

const ContainerSetting: FC<Props> = ({ ...props }) => {
  const { navigation } = props;

  return <Setting navigation={navigation} />;
};

export default ContainerSetting;
