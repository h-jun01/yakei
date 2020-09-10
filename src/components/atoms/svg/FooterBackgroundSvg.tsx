import React, { FC } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import Svg, { G, Path, Defs } from "react-native-svg";

type Props = {
  style?: ViewStyle | TextStyle | ImageStyle;
  backColor: string;
};

const FooterBackgroundSvg: FC<Props> = ({ ...props }) => {
  const { style, backColor } = props;
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 379 85"
      fill="none"
      style={style}
    >
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187.5 60c23.472 0 42.5-18.356 42.5-41v-.045C230.024 8.483 238.521 0 249 0h126v68H0V0h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          fill={backColor}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default FooterBackgroundSvg;
