import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCqU16i8-zUJb0kug9Wk-LYJBnvmTquepM",
  authDomain: "dolce-italia-d97c0.firebaseapp.com",
  projectId: "dolce-italia-d97c0",
  storageBucket: "dolce-italia-d97c0.appspot.com",
  messagingSenderId: "800335698706",
  appId: "1:800335698706:web:927d863b4f8b584d5771cb"
};
export const initFirebase = initializeApp(firebaseConfig);
