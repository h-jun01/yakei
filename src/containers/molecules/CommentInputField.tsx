import React, { FC } from "react";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import CommentInputField from "../../components/molecules/CommentInputField";

type Props = {
  focusOnInput: () => void;
};

const CommentInputFieldContainer: FC<Props> = ({ focusOnInput }) => {
  const selectUserImage = (state: RootState) => state.userReducer.userImg;
  const userImage = useSelector(selectUserImage);

  return (
    <CommentInputField userImage={userImage} focusOnInput={focusOnInput} />
  );
};

export default CommentInputFieldContainer;
