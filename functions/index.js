const functions = require("firebase-functions");
const { log } = require("firebase-functions/lib/logger");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  console.log(user.displayName);
  console.log("hoge");
  const email = user.email; // The email of the user.
  console.log(email);
});
