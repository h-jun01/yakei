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
      height={79}
      viewBox="0 0 375 71"
      fill="none"
      style={style}
    >
      <G>
        <Mask id="prefix__a" x={-1} y={4} width={377} height={80} fill="#000">
          <Path fill="#fff" d="M-1 4h377v80H-1z" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M187.5 65c23.472 0 42.5-18.356 42.5-41v-.045C230.024 13.483 238.521 5 249 5h126v78H0V5h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          />
        </Mask>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M187.5 65c23.472 0 42.5-18.356 42.5-41v-.045C230.024 13.483 238.521 5 249 5h126v78H0V5h126c10.493 0 19 8.507 19 19 0 22.644 19.028 41 42.5 41z"
          fill="#272E45"
        />
        <Path
          d="M230 24h1-1zm0-.045l-1-.002v.003h1zM249 5V4v1zm126 0h1V4h-1v1zm0 78v1h1v-1h-1zM0 83h-1v1h1v-1zM0 5V4h-1v1h1zm229 19c0 22.058-18.546 40-41.5 40v2c23.99 0 43.5-18.77 43.5-42h-2zm0-.044v.045l2-.002v-.044l-2 .001zM249 4c-11.03 0-19.975 8.93-20 19.953l2 .005C231.023 14.036 239.073 6 249 6V4zm0 2h126V4H249v2zm125-1v78h2V5h-2zm1 77H0v2h375v-2zM1 83V5h-2v78h2zM0 6h126V4H0v2zm146 18c0-11.046-8.954-20-20-20v2c9.941 0 18 8.059 18 18h2zm41.5 40C164.546 64 146 46.058 146 24h-2c0 23.23 19.51 42 43.5 42v-2z"
          fill="#9D9D9D"
          mask="url(#prefix__a)"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default FooterBackgroundSvg;
