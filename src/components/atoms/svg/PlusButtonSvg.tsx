import React, { FC } from "react";
import { Animated } from "react-native";
import Svg, { G, Circle, Rect, Defs } from "react-native-svg";

type Props = {
  style?: Object;
  changeStyle: () => void;
  baseColor: string;
  strokeColor: string;
};

const PlusButtonSvg: FC<Props> = ({
  style = undefined,
  changeStyle = undefined,
  baseColor = "#EC3B80",
  strokeColor = "#181F32",
}) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  return (
    <AnimatedSvg
      style={[{ bottom: 17 }, style]}
      onPress={changeStyle}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 72 72"
      fill="none"
    >
      <G>
        <Circle
          cx={37}
          cy={35}
          r={34.75}
          fill={strokeColor}
          stroke="#505E83"
          strokeWidth={0.5}
        />
        <Circle
          cx={37.412}
          cy={35.412}
          r={29}
          stroke={baseColor}
          strokeWidth={2}
        />
        <Circle cx={37.411} cy={35.411} r={24.302} fill={baseColor} />
        <Rect x={27} y={34} width={21} height={3} rx={1.5} fill="#fff" />
        <Rect
          x={36}
          y={46}
          width={21}
          height={3}
          rx={1.5}
          transform="rotate(-90 36 46)"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </AnimatedSvg>
  );
};

export default PlusButtonSvg;
