import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

const NotificationButtonSvg: FC = () => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        d="M20.625 16.969c.281.312.422.656.422 1.031 0 .406-.14.766-.422 1.078-.281.281-.64.422-1.078.422h-18c-.281 0-.547-.063-.797-.188a1.764 1.764 0 01-.516-.562C.11 18.5.047 18.25.047 18c0-.375.14-.719.422-1.031a1.4 1.4 0 00.14-.188c.47-.468.829-.89 1.079-1.265.28-.375.578-1.079.89-2.11.313-1.062.469-2.281.469-3.656 0-1.813.562-3.39 1.687-4.734C5.86 3.672 7.297 2.828 9.047 2.484V1.5c0-.406.14-.75.422-1.031C9.78.156 10.14 0 10.547 0s.75.156 1.031.469c.313.281.469.625.469 1.031v.984a7.284 7.284 0 013.094 1.36 7.05 7.05 0 012.109 2.578 7.163 7.163 0 01.797 3.328c0 1.375.156 2.594.469 3.656.312 1.031.593 1.735.843 2.11.282.375.657.796 1.125 1.265.063.094.11.157.141.188zm-17.39.281h14.624c-1.375-1.844-2.062-4.328-2.062-7.453V9.75c0-1.438-.516-2.672-1.547-3.703C13.219 5.016 11.984 4.5 10.547 4.5c-1.438 0-2.672.516-3.703 1.547C5.812 7.078 5.297 8.313 5.297 9.75v.047c0 3.125-.688 5.61-2.063 7.453zm9.421 5.86c-.594.593-1.297.89-2.11.89-.812 0-1.515-.297-2.108-.89-.594-.563-.891-1.266-.891-2.11h6c0 .844-.297 1.547-.89 2.11z"
        fill="#DDD"
      />
    </Svg>
  );
};

export default NotificationButtonSvg;