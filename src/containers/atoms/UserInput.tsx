import React, { FC, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { TextInput } from "react-native";
import UserInput from "../../components/atoms/UserInput";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  maxLength: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserInputContainer: FC<Props> = ({ ...props }) => {
  const { label, placeholder, value, maxLength, setValue } = props;
  const [aspect, setAspect] = useState({ width: 0, height: 0 });
  const [shouldCoverBtn, setShouldCoverBtn] = useState(true);
  const textInputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const onPress = () => {
    if (!shouldCoverBtn) return;
    textInputRef.current?.focus();
    dispatch(setShouldDisplayBottomNav(false));
    setShouldCoverBtn(false);
  };
  const onBlur = () => {
    dispatch(setShouldDisplayBottomNav(true));
    setShouldCoverBtn(true);
  };
  return (
    <UserInput
      label={label}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      setValue={setValue}
      aspect={aspect}
      setAspect={setAspect}
      onPress={onPress}
      onBlur={onBlur}
      textInputRef={textInputRef}
      shouldCoverBtn={shouldCoverBtn}
    />
  );
};

export default UserInputContainer;
