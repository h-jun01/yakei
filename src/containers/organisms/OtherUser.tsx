import React, { FC, useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { accountFireStore } from "../../firebase/accountFireStore";
import OtherUser from "../../components/organisms/OtherUser";

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
      setUserData(res.data());
    });
  }, []);

  return <OtherUser />;
};

export default OtherUserContainer;
