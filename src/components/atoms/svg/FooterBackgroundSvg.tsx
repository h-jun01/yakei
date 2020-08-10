import React, { FC } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import Svg, { G, Mask, Path, Defs } from "react-native-svg";

type Props = {
  style?: ViewStyle | TextStyle | ImageStyle;
};

const FooterBackgroundSvg: FC<Props> = ({ ...props }) => {
  const { style } = props;
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 379 85"
      fill="none"
      style={style}
    >
      <G>
        <Mask id="prefix__a" x={1} y={2} width={377} height={83} fill="#000">
          <Path fill="#fff" d="M1 2h377v83H1z" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.5 63c23.472 0 42.5-18.356 42.5-41v-.045C232.024 11.483 240.521 3 251 3h126v81H2V3h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          />
        </Mask>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M189.5 63c23.472 0 42.5-18.356 42.5-41v-.045C232.024 11.483 240.521 3 251 3h126v81H2V3h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          fill="#272E45"
        />
        <Path
          d="M232 22h.5-.5zm0-.045h-.5.5zM251 3v-.5.5zm126 0h.5v-.5h-.5V3zm0 81v.5h.5V84h-.5zM2 84h-.5v.5H2V84zM2 3v-.5h-.5V3H2zm229.5 19c0 22.35-18.787 40.5-42 40.5v1c23.731 0 43-18.563 43-41.5h-1zm0-.044V22h1v-.045h-1zM251 2.5c-10.754 0-19.475 8.706-19.5 19.454l1 .003C232.523 11.759 240.797 3.5 251 3.5v-1zm0 1h126v-1H251v1zM376.5 3v81h1V3h-1zm.5 80.5H2v1h375v-1zM2.5 84V3h-1v81h1zM2 3.5h126v-1H2v1zM147.5 22c0-10.77-8.73-19.5-19.5-19.5v1c10.217 0 18.5 8.283 18.5 18.5h1zm42 40.5c-23.213 0-42-18.15-42-40.5h-1c0 22.937 19.269 41.5 43 41.5v-1z"
          fill="#E0E0E0"
          mask="url(#prefix__a)"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default FooterBackgroundSvg;
