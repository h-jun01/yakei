import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import firebase from "../firebase/firebase";
import { styles } from "../styles/auth";

const Auth = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const signUpUser = async (email, password) => {
    try {
      if (userData.password.length < 6) {
        alert("6文字以上で入力");
        return;
      }
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.firestore().collection("users").add({
            name: userData.name, //ユーザ名
            titleList: [], //称号
            photoList: [], //投稿した画像
            createTime: firebase.firestore.FieldValue.serverTimestamp(), //作成日時
            updateTime: firebase.firestore.FieldValue.serverTimestamp(), //更新日時
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (errro) {
      console.log(error.toString());
    }
  };

  const loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (errro) {
      console.log(error.toString());
    }
  };
  return (
    <View style={styles.lap}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Text style={styles.titleText}>yakei(仮)</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.email}
            placeholder="メールアドレスを入力"
            placeholderTextColor="#808080"
            onChangeText={(email) =>
              setUserData((prevState) => ({ ...prevState, email: email }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.name}
            placeholder="ユーザ名を入力"
            placeholderTextColor="#808080"
            onChangeText={(name) =>
              setUserData((prevState) => ({ ...prevState, name: name }))
            }
          />
        </View>

        <View style={styles.input}>
          <TextInput
            value={userData.password}
            secureTextEntry={true}
            placeholder="パスワードを入力"
            placeholderTextColor="#808080"
            onChangeText={(password) =>
              setUserData((prevState) => ({ ...prevState, password: password }))
            }
          />
        </View>
        <View style={styles.buttonBack}>
          <TouchableWithoutFeedback
            onPress={() => signUpUser(userData.email, userData.password)}
          >
            <Text style={styles.buttonText}>登録</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>
            登録することで、利用規約及びプライバシーポリシーに同意するものとします。
          </Text>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.borderLeft} />
          <Text style={styles.orText}>または</Text>
          <View style={styles.borderRight} />
        </View>

        <View style={styles.twitterBack}>
          <TouchableWithoutFeedback full primary>
            <Text style={styles.buttonText}>Twitterでログイン</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Auth;
