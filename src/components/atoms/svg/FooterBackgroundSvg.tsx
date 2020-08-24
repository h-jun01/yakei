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
          d="M188.5 63c23.472 0 42.5-18.356 42.5-41v-.045C231.024 11.483 239.521 3 250 3h126v81H1V3h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          fill={backColor}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default FooterBackgroundSvg;
