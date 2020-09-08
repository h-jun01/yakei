import React, { FC, useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { accountFireStore } from "../../firebase/accountFireStore";
import OtherUser from "../../components/organisms/OtherUser";

type UserData = {
  name: string;
  selfIntroduction: string;
  userImage: string;
  userHeaderImage: string;
  favoriteList: string[];
};

type Route = {
  uid: string;
};

type Props = {
  route: RouteProp<Record<string, Route>, string>;
};

const OtherUserContainer: FC<Props> = ({ route }) => {
  const uid = route.params.uid;
  const [userData, setUserData] = useState<firebase.firestore.DocumentData>();

  useEffect(() => {
    accountFireStore.getUser(uid).then((res) => {
      setUserData(res);
    });
  }, []);

  console.log(userData);

  return <OtherUser />;
};

export default OtherUserContainer;
