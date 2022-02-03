import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRXI1n2iBV6m0Z0FTkxjpe4wGNqkrTbTk",
  authDomain: "eshop-8bfe9.firebaseapp.com",
  databaseURL:
    "https://eshop-8bfe9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eshop-8bfe9",
  storageBucket: "eshop-8bfe9.appspot.com",
  messagingSenderId: "568735057365",
  appId: "1:568735057365:web:1a9ecc7905639bd984a95c",
};

export const createUserProfileDocument = async (UserAuth, additionalData) => {
  if (!UserAuth) return;
  const userRef = firestore.doc(`users/${UserAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = UserAuth;
    const createdAd = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const AddCollectionAndDocuments = async (collectionKey, objectsAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
export const convertCollection = (collections) => {
  const transform = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transform;
  // .reduce((accumulator, collection) => {
  //   accumulator[collection.title.toLowerCase()] = collection;
  //   return accumulator;
  // }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
