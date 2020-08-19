import React, { FC, useState, useEffect } from "react";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import CommentInputField from "../../components/molecules/CommentInputField";

type Props = {
  focusOnInput: () => void;
};

const CommentInputFieldContainer: FC<Props> = ({ focusOnInput }) => {
  const [userImage, setUserImage] = useState("exsample.com");
  const selectUid = (state: RootState) => state.userReducer.uid;
  const uid = useSelector(selectUid);

  useEffect(() => {
    accountFireStore.getUserImage(uid).then((res) => {
      res && setUserImage(res);
    });
  }, []);

  return (
    <CommentInputField userImage={userImage} focusOnInput={focusOnInput} />
  );
};

export default CommentInputFieldContainer;
