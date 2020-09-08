import React, { FC } from "react";
import { TouchableOpacity, Animated } from "react-native";

type Props = {
  isMounted: boolean;
  activeOpacity: number;
  onPressOut: () => void;
  styles: object[];
};

const TouchableOpacityUsedHook: FC<Props> = ({ ...props }) => {
  const { activeOpacity, onPressOut, styles } = props;
  const { isMounted } = props;
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
    TouchableOpacity
  );

  return (
    <AnimatedTouchableOpacity
      activeOpacity={activeOpacity}
      onPressOut={onPressOut}
      style={[...styles, isMounted ? {} : { display: "none" }]}
    />
  );
};

export default TouchableOpacityUsedHook;
