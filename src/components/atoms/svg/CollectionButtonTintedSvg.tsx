import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
};

const ActiveCollectionButtonSvg: FC<Props> = ({ color = "#FC2E7E" }) => {
  return (
    <Svg width={28} height={24} viewBox="0 0 28 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.963.042c-.554 0-1.085.21-1.476.586a1.958 1.958 0 00-.612 1.414v4c0 1.104.935 2 2.088 2h22.074c.554 0 1.085-.21 1.476-.586.392-.375.612-.884.612-1.414v-4c0-.53-.22-1.04-.612-1.414a2.136 2.136 0 00-1.476-.586H2.963zM24.638 9.5H3.362a.842.842 0 00-.61.265.93.93 0 00-.252.641v11.48c0 .56.212 1.098.59 1.495.377.396.889.619 1.423.619h18.975c.533 0 1.045-.223 1.423-.62a2.17 2.17 0 00.589-1.495V10.406a.93.93 0 00-.253-.64.842.842 0 00-.61-.266zm-14.471 2.75c0-.69.56-1.25 1.25-1.25h4.687a1.25 1.25 0 010 2.5h-4.687c-.69 0-1.25-.56-1.25-1.25z"
        fill={color}
      />
    </Svg>
  );
};

export default ActiveCollectionButtonSvg;
