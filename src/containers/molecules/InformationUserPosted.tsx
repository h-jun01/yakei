import React, { FC, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import InformationUserPosted from "../../components/molecules/InformationUserPosted";
import { accountFireStore } from "../../firebase/accountFireStore";

type Props = {
  uid: string;
  createTime: string;
};

const InformationUserPostedContainer: FC<Props> = ({ ...props }) => {
  const { uid, createTime } = props;
  const [postUserName, setPostUserName] = React.useState<string>("");
  const [postUserImage, setPostUserImage] = React.useState<string>("");

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
      createTime={createTime}
    />
  );
};

export default InformationUserPostedContainer;
