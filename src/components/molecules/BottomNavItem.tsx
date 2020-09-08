import React, { FC } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { baseColor } from "../../styles/thema/colors";

import MapButtonTintedSvg from "../atoms/svg/MapButtonTintedSvg";
import PickUpButtonTintedSvg from "../atoms/svg/PickUpButtonTintedSvg";
import NotificationButtonTintedSvg from "../atoms/svg/NotificationButtonTintedSvg";
import PickUpButtonStrokedSvg from "../atoms/svg/PickUpButtonStrokedSvg";
import PlusButtonSvg from "../atoms/svg/PlusButtonSvg";
import NotificationButtonStrokedSvg from "../atoms/svg/NotificationButtonStrokedSvg";
import RoundedUserImage from "../../containers/atoms/RoundedUserImage";
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
  const activeColor = baseColor.primaryRed;
  const normalColor = baseColor.iconGray;
  const backColor = baseColor.darkNavy;
  const displayWidth = Dimensions.get("window").width;
  const iPhone11width = 414;
  const fontSizeRatio = 10 / iPhone11width;

  const styles = StyleSheet.create({
    label: {
      color: isFocused ? "#fff" : baseColor.iconTextGray,
      fontSize: displayWidth * fontSizeRatio,
      marginTop: 5,
    },
  });

  switch (index) {
    case 0: {
      const widthRatio = 22 / iPhone11width;
      const width = displayWidth * widthRatio;
      const viewBoxRatio = 22 / 28;
      return (
        <>
          <View style={{ width: width, aspectRatio: viewBoxRatio }}>
            {isFocused ? (
              <MapButtonTintedSvg color={activeColor} />
            ) : (
              <MapButtonStrokedSvg
                strokeColor={normalColor}
                backColor={backColor}
              />
            )}
          </View>
          <Text style={styles.label}>{label}</Text>
        </>
      );
    }
    case 1: {
      const widthRatio = (isFocused ? 28 : 24) / iPhone11width;
      const width = displayWidth * widthRatio;
      const viewBoxRatio = (isFocused ? 28 : 24) / 24;
      return (
        <>
          <View style={{ width: width, aspectRatio: viewBoxRatio }}>
            {isFocused ? (
              <PickUpButtonTintedSvg color={activeColor} />
            ) : (
              <PickUpButtonStrokedSvg color={normalColor} />
            )}
          </View>
          <Text style={styles.label}>{label}</Text>
        </>
      );
    }
    case 2: {
      const widthRatio = 72 / iPhone11width;
      const width = displayWidth * widthRatio;
      const viewBoxRatio = 72 / 72;
      return (
        <View style={{ width: width, aspectRatio: viewBoxRatio }}>
          <PlusButtonSvg
            style={style}
            baseColor={activeColor}
            strokeColor={backColor}
            changeStyle={changeStyle}
          />
        </View>
      );
    }
    case 3: {
      const widthRatio = (isFocused ? 24 : 22) / iPhone11width;
      const width = displayWidth * widthRatio;
      const viewBoxRatio = isFocused ? 24 / 25 : 22 / 24;
      return (
        <>
          <View style={{ width: width, aspectRatio: viewBoxRatio }}>
            {isFocused ? (
              <NotificationButtonTintedSvg color={activeColor} />
            ) : (
              <NotificationButtonStrokedSvg color={normalColor} />
            )}
          </View>
          <Text style={styles.label}>{label}</Text>
        </>
      );
    }
    default: {
      return (
        <>
          <RoundedUserImage color={isFocused ? activeColor : normalColor} />
          <Text style={styles.label}>{label}</Text>
        </>
      );
    }
  }
};

export default BottomNavItem;
