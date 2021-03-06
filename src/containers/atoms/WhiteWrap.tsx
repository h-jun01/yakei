import React, { FC, useEffect, useState } from "react";
import { Animated } from "react-native";
import WhiteWrap from "../../components/atoms/WhiteWrap";

type Props = {
  onPressOut: () => void;
  whiteWrapAnim?: Animated.Value;
  styles: object[];
};

const WhiteWrapContainer: FC<Props> = ({
  onPressOut,
  whiteWrapAnim = null,
  styles,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!whiteWrapAnim) return;
    whiteWrapAnim.setValue(0);
    Animated.timing(whiteWrapAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    return () => setIsMounted(false);
  });

  return (
    <WhiteWrap isMounted={isMounted} onPressOut={onPressOut} styles={styles} />
  );
};

export default WhiteWrapContainer;
