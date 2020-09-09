import React, { FC, useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { accountFireStore } from "../../firebase/accountFireStore";
import OtherUser from "../../components/organisms/OtherUser";

type UserScreenRouteProp = RouteProp<UserScreenStackParamList, "otherUser">;

type Props = {
  route: UserScreenRouteProp;
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
