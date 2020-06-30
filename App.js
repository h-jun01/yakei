import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
// import "./firebase";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb00UD1DkTptJejh92XaVLYROk34nICy4",
  authDomain: "hal-yakei.firebaseapp.com",
  databaseURL: "https://hal-yakei.firebaseio.com",
  projectId: "hal-yakei",
  storageBucket: "hal-yakei.appspot.com",
  messagingSenderId: "655737634399",
  appId: "1:655737634399:web:54120719f995fcdfb3e5ea",
  measurementId: "G-B7TM18STEN",
};
// Initialize Firebase

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
    };
  }

  componentDidMount() {
    // Firestoreのusersコレクションを参照
    this.ref = firebase.firestore().collection("users");
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("パスワードは6文字以上で入力");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((d) => {
          this.ref
            .add({
              name: this.state.name, //ユーザーネーム
              titleList: [],
              photoList: [],
              createTime: firebase.firestore.FieldValue.serverTimestamp(), //作成日時
              updateTime: firebase.firestore.FieldValue.serverTimestamp(), //更新日時
            })
            .then(() => {
              console.log("書き込み成功");
            })
            .catch((err) => {
              console.log(err);
            });
        });
    } catch (errro) {
      console.log(error.toString());
    }
  };

  // loginUser = (email, password) => {
  //   try {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(function (user) {
  //         console.log(user);
  //         console.log("ログイン成功");
  //       });
  //   } catch (errro) {
  //     console.log(error.toString());
  //   }
  // };
  render() {
    return (
      <SafeAreaView style={styles.lap}>
        <View style={styles.box}>
          <View style={styles.title}>
            <Text style={styles.titleText}>yakei(仮)</Text>
          </View>
          {/* <FontAwesome name="envelope" size={18} color="#fff" /> */}
          <View style={styles.input}>
            <TextInput
              placeholder="メールアドレスを入力"
              placeholderTextColor="#808080"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>

          {/* <FontAwesome5 name="user-alt" size={18} color="#fff" /> */}
          <View style={styles.input}>
            <TextInput
              placeholder="ユーザ名を入力"
              placeholderTextColor="#808080"
              onChangeText={(name) => this.setState({ name })}
            />
          </View>

          {/* <FontAwesome5 name="key" size={18} color="#fff" /> */}
          <View style={styles.input}>
            <TextInput
              secureTextEntry={true}
              placeholder="パスワードを入力"
              placeholderTextColor="#808080"
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          <View style={styles.buttonBack}>
            {/* <Button
            title="登録"
            color="#fff"
            full
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          /> */}
            <TouchableWithoutFeedback
              onPress={() =>
                this.signUpUser(this.state.email, this.state.password)
              }
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

          {/* <Button
          title="ログイン"
          style={{ margin: 15 }}
          full
          success
          onPress={() => this.loginUser(this.state.email, this.state.password)}
        /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  lap: {
    flex: 1,
    backgroundColor: "#1C3952",
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

export default App;
