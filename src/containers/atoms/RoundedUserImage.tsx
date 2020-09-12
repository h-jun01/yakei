import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import { deviceWidth, iPhone11Width } from "../../utilities/dimensions";
import RoundedUserImage from "../../components/atoms/RoundedUserImage";

type Props = {
  color?: string;
};

const PostedImageDetailContainer: FC<Props> = ({ color }) => {
  const widthRatio = 28 / iPhone11Width;
  const aspect = deviceWidth * widthRatio;
  const borderRatio = 2 / iPhone11Width;
  const borderWidth = deviceWidth * borderRatio;
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
