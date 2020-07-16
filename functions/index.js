const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp(functions.config().firebase);

// exports.userCreation = functions.auth.user().onCreate((user) => {
//   const userRef = admin.firestore().collection("users").doc(user.uid);
//   return userRef.set({
//     user: user.uid,
//     name: user.displayName,
//     titleList: [], //称号
//     photoList: [], //投稿した画像
//     createTime: admin.firestore.FieldValue.serverTimestamp(), //作成日時
//     updateTime: admin.firestore.FieldValue.serverTimestamp(), //更新日時
//   });
// });

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
        user: userRecord.uid,
        name: userRecord.displayName,
        titleList: [],
        photoList: [],
        createTime: admin.firestore.FieldValue.serverTimestamp(),
        updateTime: admin.firestore.FieldValue.serverTimestamp(),
      });
    })
    .catch((error) => {
      send(response, 500, { error: error.message });
      throw new Error("Profile doesn't exist");
    });
  send(response, 200, { message: "success！" });
};

function send(response, statusCode, body) {
  response.send({
    statusCode,
    data: JSON.stringify(body),
  });
}

exports.registe = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      userCreation(request, response);
    } catch (error) {
      send(response, 500, { error: error.message });
    }
  });
});
