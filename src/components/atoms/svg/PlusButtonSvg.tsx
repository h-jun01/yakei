import React, { FC } from "react";
import Svg, { G, Circle, Rect, Defs } from "react-native-svg";

const PlusButtonSvg: FC = () => {
  return (
    <Svg
      style={{ bottom: 17 }}
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
    >
      <G>
        <Circle cx={36} cy={36} r={35} fill="#272E45" />
        <Circle
          cx={36.412}
          cy={36.411}
          r={29}
          stroke="#FC2E7E"
          strokeWidth={2}
        />
        <Circle cx={36.411} cy={36.411} r={24.302} fill="#FC2E7E" />
        <Rect
          x={25.846}
          y={34.42}
          width={20.83}
          height={3.17}
          rx={1.585}
          transform="rotate(-.333 25.846 34.42)"
          fill="#fff"
        />
        <Rect
          x={37.996}
          y={25.846}
          width={20.83}
          height={3.17}
          rx={1.585}
          transform="rotate(89.43 37.996 25.846)"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default PlusButtonSvg;
