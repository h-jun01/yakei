import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const cors = require("cors")({ origin: true });

admin.initializeApp(functions.config().firebase);

const userCreation = async (request, response) => {
  const user = {
    email: request.body.email,
    emailVerified: false,
    displayName: request.body.displayName,
    password: request.body.password,
    disabled: false,
    photoURL:
      "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default_user.jpg?alt=media&token=cbfc483a-3070-4097-829d-56fa9474db05",
  };
  await admin
    .auth()
    .createUser(user)
    .then(async (userRecord) => {
      const userRef = admin.firestore().collection("users").doc(userRecord.uid);
      return await userRef.set({
        uid: userRecord.uid,
        name: userRecord.displayName,
        user_img: userRecord.photoURL,
        user_header_img:
          "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default_header.jpeg?alt=media&token=bec91512-fa18-4e28-b83a-0018f424a2c7",
        img_index: "",
        header_img_index: "",
        self_introduction: "",
        favorite_list: [],
        create_time: admin.firestore.FieldValue.serverTimestamp(),
        update_time: admin.firestore.FieldValue.serverTimestamp(),
      });
    })
    .catch((error) => {
      send(response, 500, { error: error.message });
      throw new Error("Profile doesn't exist");
    });
  send(response, 200, { message: "success！" });
};

const send = (response, statusCode, body) => {
  response.send({
    statusCode,
    data: JSON.stringify(body),
  });
};

exports.signUp = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      try {
        userCreation(request, response);
      } catch (error) {
        send(response, 500, { error: error.message });
      }
    });
  });

exports.googleLogin = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate(async (user) => {
    const userRef = admin.firestore().collection("users").doc(user.uid);
    return await userRef
      .set({
        uid: user.uid,
        name: user.displayName,
        user_img: user.photoURL,
        user_header_img:
          "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/defaultHeader.png?alt=media&token=f8c65ab2-c140-4a24-a2c7-e9592d0c830e",
        img_index: "",
        header_img_index: "",
        self_introduction: "",
        favorite_list: [],
        create_time: admin.firestore.FieldValue.serverTimestamp(),
        update_time: admin.firestore.FieldValue.serverTimestamp(),
      })
      .catch(() => {
        throw new Error("Profile doesn't exist");
      });
  });
