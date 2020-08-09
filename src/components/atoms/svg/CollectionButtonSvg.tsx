import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
};

const CollectionButtonSvg: FC<Props> = ({ color = "#ddd" }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.75 1.85a1.9 1.9 0 00-1.9 1.9v3.5a1.9 1.9 0 001.9 1.9h18.5a1.9 1.9 0 001.9-1.9v-3.5a1.9 1.9 0 00-1.9-1.9H2.75zm0 1.8h18.5a.1.1 0 01.1.1v3.5a.1.1 0 01-.1.1H2.75a.1.1 0 01-.1-.1v-3.5a.1.1 0 01.1-.1zM3.386 10.114a.9.9 0 00-1.536.636v9.5a1.9 1.9 0 001.9 1.9h16.5a1.9 1.9 0 001.9-1.9v-9.5a.9.9 0 10-1.8 0v9.5a.1.1 0 01-.1.1H3.75a.1.1 0 01-.1-.1v-9.5a.9.9 0 00-.264-.636z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
      <Path
        d="M9.75 11.35a.9.9 0 100 1.8h4.5a.9.9 0 100-1.8h-4.5z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
    </Svg>
  );
};

export default CollectionButtonSvg;
