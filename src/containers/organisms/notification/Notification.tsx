import React, { FC } from "react";
import Notification, {
  NotificationScreenNavigationProp,
} from "../../../componets/organisms/notification/Notification";

type Props = {
  navigation: NotificationScreenNavigationProp;
};

//主に処理に関する記述はこのファイル
const ContainerNotification: FC<Props> = ({ ...props }) => {
  const { navigation } = props;
  //例）このファイルで作った処理をcomponents側に渡す
  const title = "通知";

  return <Notification navigation={navigation} title={title} />;
};

export default ContainerNotification;
