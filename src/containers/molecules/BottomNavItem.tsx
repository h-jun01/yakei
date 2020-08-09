import React, { FC } from "react";

import BottomNavItemComponent from "../../components/molecules/BottomNavItem";

type Props = {
  index: number;
  isFocused: boolean;
  label: string;
};

const BottomNavItem: FC<Props> = (props) => {
  const { index, isFocused, label } = props;
  const color = isFocused ? "#FC2E7E" : "#606578";

  return (
    <BottomNavItemComponent index={index} isFocused={isFocused} label={label} />
  );
};

export default BottomNavItem;
