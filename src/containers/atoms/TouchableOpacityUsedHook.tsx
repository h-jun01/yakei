import React, { FC, useEffect, useState } from "react";
import { Animated } from "react-native";
import TouchableOpacityUsedHook from "../../components/atoms/TouchableOpacityUsedHook";

type Props = {
  activeOpacity: number;
  onPressOut: () => void;
  whiteWrapAnim: Animated.Value;
  styles: object[];
};

const TouchableOpacityUsedHookContainer: FC<Props> = ({ ...props }) => {
  const { activeOpacity, onPressOut, whiteWrapAnim, styles } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    whiteWrapAnim.setValue(0);
    Animated.timing(whiteWrapAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    return () => setIsMounted(false);
  });

  return (
    <TouchableOpacityUsedHook
      isMounted={isMounted}
      activeOpacity={activeOpacity}
      onPressOut={onPressOut}
      styles={styles}
    />
  );
};

export default TouchableOpacityUsedHookContainer;
