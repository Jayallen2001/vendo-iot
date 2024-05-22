// Your web app's Firebase configuration

import {initializeApp} from "firebase/app"
import {getDatabase ,ref, onValue} from "firebase/datadbase"
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBtyPYNHBMhnURK-lRNkmq0pvF9tZYSSXU",
    authDomain: "vendo-4fae1.firebaseapp.com",
    projectId: "vendo-4fae1",
    storageBucket: "vendo-4fae1.appspot.com",
    messagingSenderId: "149448031756",
    appId: "1:149448031756:web:de67cb0f4061b41cb0f829"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  export {db, ref, onValue};