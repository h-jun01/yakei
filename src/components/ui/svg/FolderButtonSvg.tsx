import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

const FolderButtonSvg: FC = () => {
  return (
    <Svg width={24} height={18} viewBox="0 0 24 18" fill="none">
      <Path
        d="M21.75 3a2.17 2.17 0 011.594.656c.437.438.656.969.656 1.594v10.5a2.17 2.17 0 01-.656 1.594A2.17 2.17 0 0121.75 18H2.25a2.17 2.17 0 01-1.594-.656A2.17 2.17 0 010 15.75V2.25C0 1.625.219 1.094.656.656A2.17 2.17 0 012.25 0h6.89c.407 0 .75.14 1.032.422L12.75 3h9zm0 12.75V5.25h-9.328c-.406 0-.75-.14-1.031-.422L8.812 2.25H2.25v13.5h19.5z"
        fill="#DDD"
      />
    </Svg>
  );
};

export default FolderButtonSvg;
