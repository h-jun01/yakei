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
  };
  await admin
    .auth()
    .createUser(user)
    .then(async (userRecord) => {
      const userRef = admin.firestore().collection("users").doc(userRecord.uid);
      return await userRef.set({
        uid: userRecord.uid,
        name: userRecord.displayName,
        user_img: "",
        title_list: [],
        photo_list: [],
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

exports.registe = functions
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
