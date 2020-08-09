import React, { FC } from "react";
import { Text } from "react-native";

import MapButtonSvg from "../atoms/svg/MapButtonSvg";
import CollectionButtonSvg from "../atoms/svg/CollectionButtonSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";

type Props = {
  index: number;
  isFocused: boolean;
  label: string;
};

const BottomNavItem: FC<Props> = (props) => {
  const { index, isFocused, label } = props;
  const color = isFocused ? "#FC2E7E" : "#606578";
  switch (index) {
    case 0:
      return (
        <>
          <MapButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    case 1:
      return (
        <>
          <CollectionButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    case 2:
      return <PlusButtonSvg />;
    case 3:
      return (
        <>
          <NotificationButtonSvg color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
    default:
      return (
        <>
          <RoundedUserImage color={color} />
          <Text style={{ color: "#fff" }}>{label}</Text>
        </>
      );
  }
};

export default BottomNavItem;
