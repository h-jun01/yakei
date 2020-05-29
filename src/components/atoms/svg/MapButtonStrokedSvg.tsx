import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  strokeColor?: string;
  backColor?: string;
};

const NormalMapButtonSvg: FC<Props> = ({
  strokeColor = "#838692",
  backColor = "#272E45",
}) => {
  return (
    <Svg width={22} height={28} viewBox="0 0 22 28" fill="none">
      <Path
        d="M10.063 25.531l-1.65 1.131.005.008.006.008 1.639-1.147zm-2.579-3.703l-1.652 1.127.009.013.008.012 1.635-1.152zM4.063 16.86L2.37 17.925l.01.014.009.015 1.674-1.095zm-1.079-1.78l-1.82.827.03.066.035.064 1.755-.958zm-.562-1.313l-1.886.665.017.049.02.047 1.849-.761zm-.375-1.36l-1.994.154.007.088.014.087 1.973-.329zm17.86 0l-1.977-.304-.011.069-.006.07 1.993.165zm-.376 1.36l-1.85-.762-.019.048-.017.048 1.886.666zm-.562 1.312l-1.756-.958-.035.064-.03.067 1.82.827zm-1.032 1.781l1.674 1.095.01-.015.009-.014-1.692-1.066zm-3.468 4.97l-1.635-1.153-.01.013-.008.012 1.653 1.127zm-2.531 3.702l1.638 1.147.005-.008.006-.008-1.65-1.13zm-3.61-11.86l-1.444 1.385.03.03.03.03 1.384-1.444zm5.297-5.296l-1.444 1.384.03.03.03.03 1.384-1.444zM11.712 24.4a362.611 362.611 0 00-2.593-3.724L5.85 22.98c.966 1.37 1.82 2.597 2.564 3.682l3.299-2.262zm-2.575-3.698A151.981 151.981 0 007.09 17.75l-3.243 2.342a149.02 149.02 0 011.985 2.862l3.305-2.253zM7.09 17.75c-.383-.53-.833-1.19-1.354-1.986L2.39 17.954a56.999 56.999 0 001.458 2.139L7.09 17.75zm-1.335-1.957A37.738 37.738 0 014.74 14.12L1.23 16.036c.22.405.611 1.047 1.141 1.889l3.385-2.131zm-.95-1.543c-.143-.314-.32-.728-.534-1.247L.573 14.527c.223.543.42 1.005.59 1.379l3.642-1.655zM4.308 13.1a6.425 6.425 0 01-.288-1.022l-3.946.657c.088.53.252 1.102.462 1.696L4.308 13.1zm-.267-.847A16.606 16.606 0 014 11H0c0 .568.017 1.09.053 1.56l3.988-.307zM4 11c0-1.976.669-3.59 2.04-4.96L3.21 3.21C1.082 5.34 0 7.977 0 11h4zm2.04-4.96C7.41 4.668 9.023 4 11 4V0C7.976 0 5.34 1.081 3.21 3.21l2.83 2.83zM11 4c1.976 0 3.59.669 4.96 2.04l2.83-2.83C16.66 1.082 14.023 0 11 0v4zm4.96 2.04C17.332 7.41 18 9.023 18 11h4c0-3.024-1.081-5.66-3.21-7.79l-2.83 2.83zM18 11c0 .457-.027.82-.07 1.102l3.953.608c.082-.53.117-1.105.117-1.71h-4zm-.087 1.24c-.008.093-.054.334-.231.764l3.699 1.523c.26-.632.464-1.297.518-1.955l-3.986-.332zm-.268.86a7.23 7.23 0 01-.432 1.02l3.511 1.916c.256-.469.484-1.013.693-1.605L17.645 13.1zm-.497 1.15c-.093.205-.366.692-.903 1.544l3.385 2.131c.526-.835.94-1.536 1.16-2.02l-3.642-1.654zm-.884 1.515c-.52.796-.971 1.456-1.354 1.986l3.243 2.342c.43-.595.916-1.31 1.458-2.14l-3.347-2.188zM14.91 17.75c-.414.573-1.107 1.55-2.076 2.925l3.27 2.304c.969-1.375 1.65-2.335 2.049-2.887L14.91 17.75zm-2.094 2.95c-.936 1.374-1.78 2.607-2.528 3.7l3.299 2.261c.751-1.095 1.596-2.331 2.534-3.707l-3.305-2.253zM10.3 24.384A.939.939 0 0111 24v4c1.009 0 1.955-.435 2.576-1.322l-3.277-2.294zM11 24c.057 0 .192.012.355.094.168.084.282.2.346.29l-3.277 2.294C9.044 27.565 9.991 28 11 28v-4zm-4.056-8.884C8.064 16.189 9.45 16.75 11 16.75v-4c-.511 0-.907-.157-1.288-.522l-2.768 2.888zM11 16.75c1.553 0 2.94-.564 4.04-1.664l-2.83-2.828c-.337.337-.7.492-1.21.492v4zm4.04-1.664c1.112-1.113 1.71-2.508 1.71-4.086h-4c0 .484-.152.87-.54 1.258l2.83 2.828zM16.75 11c0-1.58-.6-2.976-1.741-4.069L12.24 9.819c.36.345.509.7.509 1.181h4zm-1.681-4.009C13.976 5.851 12.581 5.25 11 5.25v4c.482 0 .836.15 1.181.509l2.888-2.768zM11 5.25c-1.578 0-2.973.598-4.086 1.71l2.828 2.83c.387-.388.774-.54 1.258-.54v-4zM6.914 6.96C5.814 8.06 5.25 9.448 5.25 11h4c0-.51.155-.873.492-1.21L6.914 6.96zM5.25 11c0 1.551.561 2.936 1.634 4.056l2.888-2.768c-.365-.38-.522-.777-.522-1.288h-4z"
        fill={strokeColor}
      />
      <Path
        d="M10.063 25.531c-.75-1.093-1.61-2.328-2.579-3.703a150.595 150.595 0 00-2.015-2.906 54.932 54.932 0 01-1.407-2.063 39.123 39.123 0 01-1.078-1.78 40.827 40.827 0 01-.562-1.313 8.33 8.33 0 01-.375-1.36A18.562 18.562 0 012 11c0-2.5.875-4.625 2.625-6.375S8.5 2 11 2s4.625.875 6.375 2.625S20 8.5 20 11c0 .531-.031 1-.094 1.406-.031.375-.156.828-.375 1.36a9.137 9.137 0 01-.562 1.312c-.157.344-.5.938-1.032 1.781-.53.813-1 1.5-1.406 2.063a352.35 352.35 0 00-2.062 2.906c-.938 1.375-1.781 2.61-2.531 3.703-.22.313-.532.469-.938.469-.406 0-.719-.156-.938-.469zm-1.735-11.86c.75.72 1.64 1.079 2.672 1.079 1.031 0 1.906-.36 2.625-1.078.75-.75 1.125-1.64 1.125-2.672 0-1.031-.375-1.906-1.125-2.625-.719-.75-1.594-1.125-2.625-1.125s-1.922.375-2.672 1.125C7.61 9.094 7.25 9.969 7.25 11s.36 1.922 1.078 2.672z"
        fill={backColor}
      />
    </Svg>
  );
};

export default NormalMapButtonSvg;