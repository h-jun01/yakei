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
      "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default.png?alt=media&token=04a08b6e-f169-4204-97de-598d7ed42225",
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
        img_index: "",
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

exports.inputPhotoDataList = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate(async (user) => {
    const photoRef = admin.firestore().collection("photos").doc(user.uid);
    return await photoRef
      .set({
        uid: user.uid,
        photo_list: [],
      })
      .catch((error) => {
        throw new Error("Profile doesn't exist");
      });
  });
