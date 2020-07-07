import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import firebase from "../firebase/firebase";

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
          firebase
            .firestore()
            .collection("users")
            .add({
              name: userData.name, //ユーザ名
              titleList: [], //称号
              photoList: [], //投稿した画像
              createTime: firebase.firestore.FieldValue.serverTimestamp(), //作成日時
              updateTime: firebase.firestore.FieldValue.serverTimestamp(), //更新日時
            })
            .then(() => {
              console.log("書き込み成功");
            })
            .catch((err) => {
              console.log(err);
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
          console.log("ログイン成功");
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
        {/* <FontAwesome name="envelope" size={18} color="#fff" /> */}
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

        {/* <FontAwesome5 name="user-alt" size={18} color="#fff" /> */}
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

        {/* <FontAwesome5 name="key" size={18} color="#fff" /> */}
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

const styles = StyleSheet.create({
  lap: {
    flex: 1,
    // backgroundColor: "#1C3952",
    justifyContent: "center",
  },
  box: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    marginBottom: 70,
  },
  titleText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    opacity: 0.7,
  },
  buttonBack: {
    backgroundColor: "#337CEA",
    borderRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    padding: 11,
    textAlign: "center",
  },
  text: {
    marginBottom: 40,
  },
  textColor: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
  borderBox: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  orText: {
    color: "#fff",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    fontSize: 12,
  },
  borderLeft: {
    borderWidth: 0.3,
    borderColor: "#fff",
    width: 100,
    height: 1,
    marginTop: 6,
  },
  borderRight: {
    borderWidth: 0.3,
    borderColor: "#fff",
    width: 100,
    height: 1,
    marginTop: 6,
  },
  twitterBack: {
    backgroundColor: "#55aced",
    borderRadius: 5,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 15,
  },
});

export default Auth;
