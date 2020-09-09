import React, { FC } from "react";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import RoundedUserImage from "../../components/atoms/RoundedUserImage";

type Props = {
  color?: string;
};

const PostedImageDetailContainer: FC<Props> = ({ color }) => {
  const displayWidth = Dimensions.get("window").width;
  const iPhone11width = 414;
  const widthRatio = 28 / iPhone11width;
  const aspect = displayWidth * widthRatio;
  const borderRatio = 2 / iPhone11width;
  const borderWidth = displayWidth * borderRatio;
  const url = useSelector((state: RootState) => state.userReducer.userImg);

  return (
    <RoundedUserImage
      color={color}
      aspect={aspect}
      borderWidth={borderWidth}
      url={url}
    />
  );
};

export default PostedImageDetailContainer;
