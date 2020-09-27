import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";
import RoundedUserImage from "../../components/atoms/RoundedUserImage";

type Props = {
  color?: string;
  aspect: number;
  borderWidth: number;
};

const PostedImageDetailContainer: FC<Props> = ({
  color,
  aspect,
  borderWidth,
}) => {
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
