import React, { FC } from "react";
import { useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { RootState } from "../../reducers/index";
import Help from "../../components/organisms/Help";

type UserScreenNavigationProp = StackNavigationProp<
  UserScreenStackParamList,
  "faq"
>;

type Props = {
  navigation: UserScreenNavigationProp;
};

const HelpContainer: FC<Props> = ({ navigation }) => {
  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );

  return <Help navigation={navigation} bottomHeight={bottomHeight} />;
};

export default HelpContainer;
