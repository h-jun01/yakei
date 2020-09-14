import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const cors = require("cors")({ origin: true });

admin.initializeApp(functions.config().firebase);

const defaultUserImages: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user1.jpg?alt=media&token=cf1462bb-8f54-4ee0-b760-209ad70bc816",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user2.jpg?alt=media&token=92820efe-c61d-4ba7-ae14-2590f8d88a2d",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user3.jpg?alt=media&token=216aea86-134a-437c-8b8e-f43fbac34679",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user4.jpg?alt=media&token=e8c65247-45cf-4085-8c19-eba0c146f58c",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user5.jpg?alt=media&token=8ee7d342-9f98-476a-8e97-540c91c71b5e",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user6.jpg?alt=media&token=ee84c51c-ad5e-475d-b6a2-d76970706aab",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user7.jpg?alt=media&token=62fb3fc4-f5dd-4b7b-bb85-e5c32fb6fcb9",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user8.jpg?alt=media&token=eb7b61b1-bfa3-4a13-9c77-dfeec21e1157",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user9.jpg?alt=media&token=36565a9d-31c4-4e14-8aa9-406bed49bec6",
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/default%2Fdefault_user10.jpg?alt=media&token=9da28e5f-5d79-46e9-9994-a65869d63c87",
];
const randomImage =
  defaultUserImages[Math.floor(Math.random() * defaultUserImages.length)];

const userHeaderImage =
  "https://firebasestorage.googleapis.com/v0/b/hal-yakei.appspot.com/o/sky.jpeg?alt=media&token=88028b26-76c8-4bd4-9066-bbda8c0aeb44";

const userCreation = async (
  request: functions.https.Request,
  response: functions.Response<any>
) => {
  const user = {
    email: request.body.email,
    emailVerified: false,
    displayName: request.body.displayName,
    password: request.body.password,
    disabled: false,
    photoURL: randomImage,
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
        user_header_img: userHeaderImage,
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

const send = (
  response: functions.Response<any>,
  statusCode: number,
  body: { error?: any; message?: string }
) => {
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

const deleteCollection = (db, collectionRef, batchSize) => {
  const query = collectionRef.orderBy("__name__").limit(batchSize);
  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, batchSize, resolve, reject);
  });
};

const deleteQueryBatch = (db, query, batchSize, resolve, reject) => {
  query
    .get()
    .then((snapshot) => {
      //検索結果が0件なら処理終わり
      if (snapshot.size == 0) {
        return 0;
      }

      //削除のメイン処理
      const batch = db.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      //一旦処理サイズをreturn
      return batch.commit().then(() => {
        return snapshot.size;
      });
    })
    .then((numDeleted) => {
      //もう対象のデータが0なら処理終わり
      if (numDeleted == 0) {
        resolve();
        return;
      }

      //あだあるなら、再度処理
      process.nextTick(() => {
        deleteQueryBatch(db, query, batchSize, resolve, reject);
      });
    })
    .catch(reject);
};

exports.deleteAtPath = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    cors(request, response, () => {
      try {
        const colRef = admin
          .firestore()
          .collection(request.body.collection)
          .doc(request.body.doc)
          .collection(request.body.subCollection);
        deleteCollection(admin.firestore(), colRef, 500);
      } catch (error) {
        send(response, 500, { error: error.message });
      }
    });
  });
