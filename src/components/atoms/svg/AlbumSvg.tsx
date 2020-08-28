import React, { FC } from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
import { Animated } from "react-native";

type Props = {
  textColor?: string;
  backColor?: string;
  style?: Object;
};

const AlbumSvg: FC<Props> = ({
  textColor = "#E3EAF4",
  backColor = "#181F32",
  style,
}) => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  return (
    <AnimatedSvg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 54 54"
      fill="none"
      style={style}
    >
      <G>
        <Circle cx={27} cy={23} r={23} fill={backColor} />
        <G>
          <Path
            d="M35.125 16c.52 0 .964.182 1.328.547.365.364.547.807.547 1.328v11.25c0 .52-.182.963-.547 1.328a1.808 1.808 0 01-1.328.547h-16.25c-.52 0-.963-.182-1.328-.547A1.808 1.808 0 0117 29.125v-11.25c0-.52.182-.963.547-1.328A1.808 1.808 0 0118.875 16h16.25zm-.234 13.125c.156 0 .234-.078.234-.234V18.109c0-.156-.078-.234-.234-.234H19.109c-.156 0-.234.078-.234.234v10.782c0 .156.078.234.234.234h15.782zm-14.024-9.219c.313-.312.69-.468 1.133-.468.443 0 .807.156 1.094.468.312.287.468.651.468 1.094 0 .443-.156.82-.468 1.133-.287.286-.651.43-1.094.43-.443 0-.82-.144-1.133-.43a1.617 1.617 0 01-.43-1.133c0-.443.144-.807.43-1.094zm-.117 7.344v-1.875l1.563-1.563c.208-.208.416-.208.625 0l1.562 1.563 4.688-4.688c.208-.208.416-.208.625 0l3.437 3.438v3.125h-12.5z"
            fill={textColor}
          />
        </G>
      </G>
    </AnimatedSvg>
  );
};

export default AlbumSvg;
