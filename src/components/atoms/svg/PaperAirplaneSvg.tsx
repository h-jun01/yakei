import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
};

const ActiveMapButtonSvg: FC<Props> = ({ color = "#fff" }) => {
  return (
    <Svg width={"100%"} height={"100%"} viewBox="0 0 22 22" fill="none">
      <Path d="M6.5 12.5L0 9l21.5-9-9 21.5-4-7L18.5 3l-12 9.5z" fill={color} />
    </Svg>
  );
};

export default ActiveMapButtonSvg;
