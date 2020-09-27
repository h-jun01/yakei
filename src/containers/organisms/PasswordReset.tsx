import React, { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { Hoshi } from "react-native-textinput-effects";
import PasswordReset from "../../components/organisms/PasswordReset";

const PasswordResetContainer: FC = () => {
  const dispatch = useDispatch();
  const [aspect, setAspect] = useState({ width: 0, height: 0 });
  const [isCoveredBtn, setIsCoveredBtn] = useState(true);
  const textInputRef = useRef<Hoshi>(null);
  const onPress = () => {
    dispatch(setShouldDisplayBottomNav(false));
    setIsCoveredBtn(false);
    textInputRef.current?.focus();
  };
  const onBlur = () => {
    dispatch(setShouldDisplayBottomNav(true));
    setIsCoveredBtn(true);
  };
  const onFocus = () => dispatch(setShouldDisplayBottomNav(false));

  return (
    <PasswordReset
      onPress={onPress}
      onBlur={onBlur}
      onFocus={onFocus}
      aspect={aspect}
      setAspect={setAspect}
      textInputRef={textInputRef}
      isCoveredBtn={isCoveredBtn}
    />
  );
};

export default PasswordResetContainer;
