import React, { FC, useEffect, useState } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { accountFireStore } from "../../firebase/accountFireStore";
import { setAspectRatioIntoState } from "../../utilities/imageAspect";
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
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<number>(0);

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
    setIsMounted(true);
    (() => {
      // isMounted === trueの時はuseState関連の処理を行わないようにする
      // "Can only update a mounted or mounting component"Warningエラーを起こさないために必要
      if (!isMounted) return;
      getUserName(data.uid);
      setAspectRatioIntoState(data.url, setAspectRatio);
    })();
    return () => setIsMounted(false);
  }, [data, isMounted]);

  return (
    <Card
      navigation={navigation}
      data={data}
      postUserName={postUserName}
      aspectRatio={aspectRatio}
    />
  );
};

export default CardContainer;
