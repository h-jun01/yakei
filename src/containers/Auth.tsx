import React, { useState } from "react";
import Auth, { UserData } from "../componets/Auth";
import { auth } from "../firebase/firebase";

const ContainerAuth = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    name: "",
    password: "",
  });

  const signUpUser = (name: string, email: string, password: string): void => {
    try {
      if (userData.password.length < 6) {
        alert("6文字以上で入力");
        return;
      }

      const url =
        "https://asia-northeast1-hal-yakei.cloudfunctions.net/registe";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          displayName: name,
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          auth.signInWithEmailAndPassword(email, password);
          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };

  // const loginUser = (email, password) => {
  //   try {
  //     auth.signInWithEmailAndPassword(email, password).then(function (user) {
  //       console.log(user);
  //     });
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // };
  return (
    <Auth
      userData={userData}
      setUserData={setUserData}
      signUpUser={signUpUser}
    />
  );
};

export default ContainerAuth;
