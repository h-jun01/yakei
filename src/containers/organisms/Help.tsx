import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import Help from "../../components/organisms/Help";

type Props = {
  navigation: any;
};

const HelpContainer: FC<Props> = ({ navigation }) => {
  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );

  return <Help navigation={navigation} bottomHeight={bottomHeight} />;
};
