import React, { FC } from "react";
import User from "../../../components/organisms/user/User";
import { RootState } from "../../../reducers/index";
import { useSelector } from "react-redux";

type Props = {
  navigation: any;
};

const ContainerUser: FC<Props> = ({ navigation }) => {
  const selectName = (state: RootState) => state.userReducer.name;
  const selectImage = (state: RootState) => state.userReducer.userImg;
  const selectHeaderImage = (state: RootState) =>
    state.userReducer.userHeaderImg;
  const selectSelfIntroduction = (state: RootState) =>
    state.userReducer.selfIntroduction;
  const name = useSelector(selectName);
  const image = useSelector(selectImage);
  const headerImage = useSelector(selectHeaderImage);
  const selfIntroduction = useSelector(selectSelfIntroduction);

  return (
    <User
      navigation={navigation}
      name={name}
      image={image}
      headerImage={headerImage}
      selfIntroduction={selfIntroduction}
    />
  );
};

export default ContainerUser;
