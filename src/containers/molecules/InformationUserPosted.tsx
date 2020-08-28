import React, { FC, useState, useEffect } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { accountFireStore } from "../../firebase/accountFireStore";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";

type Props = {
  uid: string;
  create_time: Timestamp;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, create_time } = props;
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
  }, []);

  //投稿したユーザのアイコン画像を取得
  useEffect(() => {
    accountFireStore
      .getUserImage(uid)
      .then((res: React.SetStateAction<string>) => {
        res && setPostUserImage(res);
      })
      .catch(() => {
        setPostUserImage("https://example.com");
      });
  }, []);

  return (
    <InformationUserPosted
      postUserName={postUserName}
      postUserImage={postUserImage}
      create_time={create_time}
    />
  );
};

export default InformationUserPostedContainer;
