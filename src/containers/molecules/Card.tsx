import React, { FC, useEffect, useState } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { accountFireStore } from "../../firebase/accountFireStore";
import Card from "../../components/molecules/Card";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
};

type Props = {
  navigation: any;
  data: PhotoDataList;
};

const CardContainer: FC<Props> = ({ ...props }) => {
  const { navigation, data } = props;
  const [postUserName, setPostUserName] = useState<string>("");

  // ユーザー名の取得
  const getUserName = (uid: string) => {
    accountFireStore
      .getUserName(uid)
      .then((res: React.SetStateAction<string>) => {
        setPostUserName(res);
      })
      .catch(() => {
        setPostUserName("名無し");
      });
  };

  useEffect(() => {
    getUserName(data.uid);
  }, [data]);

  return (
    <Card navigation={navigation} data={data} postUserName={postUserName} />
  );
};

export default CardContainer;
