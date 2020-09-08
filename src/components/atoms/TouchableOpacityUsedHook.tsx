import React, { FC } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";

type Props = {
  isMounted: boolean;
  onPressOut: () => void;
  styles: object[];
};

const TouchableOpacityUsedHook: FC<Props> = ({ ...props }) => {
  const { onPressOut, styles } = props;
  const { isMounted } = props;

  return (
    <TouchableWithoutFeedback
      onPressOut={onPressOut}
      style={isMounted ? {} : { display: "none" }}
    >
      <Animated.View style={[...styles]} />
    </TouchableWithoutFeedback>
  );
};

export default TouchableOpacityUsedHook;
