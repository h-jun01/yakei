import React, { FC, useState, useEffect } from "react";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { accountFireStore } from "../../firebase/accountFireStore";
import CommentField from "../../components/molecules/CommentField";

type Props = {
  uid: string;
  message: string;
  create_time: string;
};

const CommentFieldContainer: FC<Props> = ({ ...props }) => {
  const { uid, message, create_time } = props;
  const [postUserName, setPostUserName] = useState<string>("");
  const [postUserImage, setPostUserImage] = useState<string>(
    "https://example.com"
  );

  //投稿したユーザ名の取得
  useEffect(() => {
    accountFireStore
      .getUserName(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserName(res);
      })
      .catch(() => {
        setPostUserName("Anonymous");
      });

    return setPostUserName("");
  }, []);

  //コメントを投稿したユーザのアイコン画像を取得
  useEffect(() => {
    accountFireStore
      .getUserImage(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserImage(res);
      })
      .catch(() => {
        setPostUserImage("https://example.com");
      });

    return setPostUserImage("https://example.com");
  }, []);

  return (
    <CommentField
      postUserName={postUserName}
      postUserImage={postUserImage}
      message={message}
      create_time={create_time}
    />
  );
};

export default CommentFieldContainer;
