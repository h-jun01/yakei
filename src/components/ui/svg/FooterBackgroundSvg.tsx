import React, { FC } from "react";
import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type Props = {
  style?: ViewStyle | TextStyle | ImageStyle;
};

const FooterBackgroundSvg: FC<Props> = ({ ...props }) => {
  const { style } = props;
  return (
    <Svg
      width={"100%"}
      height={79}
      viewBox="0 0 375 71"
      fill="none"
      style={style}
    >
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187.5 62c23.472 0 42.5-18.356 42.5-41v-.045C230.024 10.483 238.521 2 249 2h126v69H0V2h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          fill="#282828"
        />
      </G>
    </Svg>
  );
};

export default FooterBackgroundSvg;
