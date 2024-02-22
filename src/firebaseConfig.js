import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAjMx2rWbL-zNO-mDZVXMsegORsgww09DI",
  authDomain: "something-9b65f.firebaseapp.com",
  projectId: "something-9b65f",
  storageBucket: "something-9b65f.appspot.com",
  messagingSenderId: "1033658010166",
  appId: "1:1033658010166:web:fa5444451edde54fce2697"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
