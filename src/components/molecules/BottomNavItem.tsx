import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

import MapButtonTintedSvg from "../atoms/svg/MapButtonTintedSvg";
import CollectionButtonTintedSvg from "../atoms/svg/CollectionButtonTintedSvg";
import NotificationButtonTintedSvg from "../atoms/svg/NotificationButtonTintedSvg";
import CollectionButtonStrokedSvg from "../atoms/svg/CollectionButtonStrokedSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonStrokedSvg from "../atoms/svg/NotificationButtonStrokedSvg";
import RoundedUserImage from "../atoms/RoundedUserImage";
import MapButtonStrokedSvg from "../atoms/svg/MapButtonStrokedSvg";

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
            <MapButtonTintedSvg color={activeColor} />
          ) : (
            <MapButtonStrokedSvg
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
            <CollectionButtonTintedSvg color={activeColor} />
          ) : (
            <CollectionButtonStrokedSvg color={normalColor} />
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
            <NotificationButtonTintedSvg color={activeColor} />
          ) : (
            <NotificationButtonStrokedSvg color={normalColor} />
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
