import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
};

const ActiveNotificationButtonSvg: FC<Props> = ({ color = "#FC2E7E" }) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M12.214 23.143c0 .12-.094.214-.214.214A2.36 2.36 0 019.643 21c0-.12.094-.214.214-.214s.214.093.214.214c0 1.058.871 1.929 1.929 1.929.12 0 .214.093.214.214zm10.929-3.857c-1.982-1.674-4.286-4.674-4.286-11.143 0-2.572-2.13-5.384-5.678-5.906a1.35 1.35 0 00.107-.523 1.286 1.286 0 00-2.572 0c0 .188.04.362.107.523-3.549.522-5.678 3.334-5.678 5.906 0 6.469-2.304 9.469-4.286 11.143 0 .937.777 1.714 1.714 1.714h6A3.435 3.435 0 0012 24.429 3.435 3.435 0 0015.429 21h6c.937 0 1.714-.777 1.714-1.714z"
        fill={color}
      />
    </Svg>
  );
};

export default ActiveNotificationButtonSvg;
