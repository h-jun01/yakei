import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import "./firebase";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Button,
  Item,
  Label,
} from "native-base";

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {};
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
    // Firestoreの「messages」コレクションを参照
    this.ref = firebase.firestore().collection("users");
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("6文字以上で入力");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((d) => {
          this.ref
            .add({
              Name: this.state.name, //ユーザーネーム
              uid: d.user.uid, //userID
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

  loginUser = (email, password) => {
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
  render() {
    return (
      <Container style={styles.lap}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(name) => this.setState({ name })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button
            style={{ margin: 10 }}
            full
            rounded
            success
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "#fff" }}>Login</Text>
          </Button>

          <Button
            style={{ margin: 10 }}
            full
            rounded
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: "#fff" }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

// const App = () => {
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const signUpUser = (email, password) => {
//     try {
//       if (userData.password.length < 6) {
//         alert("6文字以上で入力");
//         return;
//       }
//       firebase.auth().createUserWithEmailAndPassword(email, password);
//     } catch (errro) {
//       console.log(error.toString());
//     }
//   };

//   const loginUser = (email, password) => {};

//   return (
//     // <SafeAreaView>
//     <Container style={styles.lap}>
//       <Form>
//         <Item floatingLabel>
//           <Label>Email</Label>
//           <Input
//             autoCorrect={false}
//             autoCapitalize="none"
//             onChangeText={(email) =>
//               setUserData((prevState) => ({ ...prevState, emai: email }))
//             }
//           />
//         </Item>

//         <Item floatingLabel>
//           <Label>Password</Label>
//           <Input
//             secureTextEntry={true}
//             autoCorrect={false}
//             autoCapitalize="none"
//             onChangeText={(password) =>
//               setUserData((prevState) => ({ ...prevState, password: password }))
//             }
//           />
//         </Item>

//         <Button
//           style={{ margin: 10 }}
//           full
//           rounded
//           success
//           onPress={loginUser(userData.email, userData.password)}
//         >
//           <Text style={{ color: "#fff" }}>Login</Text>
//         </Button>

//         <Button
//           style={{ margin: 10 }}
//           full
//           rounded
//           primary
//           onPress={signUpUser(userData.email, userData.password)}
//         >
//           <Text style={{ color: "#fff" }}>Sign Up</Text>
//         </Button>
//       </Form>
//     </Container>
//     // </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  lap: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
});

export default App;
