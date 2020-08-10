import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

import ActiveMapButtonSvg from "../atoms/svg/ActiveMapButtonSvg";
import ActiveCollectionButtonSvg from "../atoms/svg/ActiveCollectionButtonSvg";
import ActiveNotificationButtonSvg from "../atoms/svg/ActiveNotificationButtonSvg";
import CollectionButtonSvg from "../atoms/svg/CollectionButtonSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonSvg from "../atoms/svg/NotificationButtonSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";
import NormalMapButtonSvg from "../atoms/svg/NormalMapButtonSvg";

type Props = {
  index: number;
  isFocused: boolean;
  label: string;
  style?: Object;
  changeStyle: () => void;
};

const BottomNavItem: FC<Props> = (props) => {
  const { index, isFocused, label, style, changeStyle } = props;
  const activeColor = "#FC2E7E";
  const normalColor = "#838692";
  const backColor = "#272E45";

  const styles = StyleSheet.create({
    label: {
      color: isFocused ? "#fff" : "#838692",
      fontSize: 10,
      marginTop: 5,
    },
  });

  switch (index) {
    case 0:
      return (
        <>
          {isFocused ? (
            <ActiveMapButtonSvg color={activeColor} />
          ) : (
            <NormalMapButtonSvg
              strokeColor={normalColor}
              backColor={backColor}
            />
          )}
          <Text style={styles.label}>{label}</Text>
        </>
      );
    case 1:
      return (
        <>
          {isFocused ? (
            <ActiveCollectionButtonSvg color={activeColor} />
          ) : (
            <CollectionButtonSvg color={normalColor} />
          )}
          <Text style={styles.label}>{label}</Text>
        </>
      );
    case 2:
      return <PlusButtonSvg style={style} changeStyle={changeStyle} />;
    case 3:
      return (
        <>
          {isFocused ? (
            <ActiveNotificationButtonSvg color={activeColor} />
          ) : (
            <NotificationButtonSvg color={normalColor} />
          )}
          <Text style={styles.label}>{label}</Text>
        </>
      );
    default:
      return (
        <>
          <RoundedUserImage color={isFocused ? activeColor : normalColor} />
          <Text style={styles.label}>{label}</Text>
        </>
      );
  }
};

export default BottomNavItem;
