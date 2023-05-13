import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC424I0XGuV9brk6ZfQlTJXRB1HSq5sXqo",
    authDomain: "airbus-void.firebaseapp.com",
    projectId: "airbus-void",
    storageBucket: "airbus-void.appspot.com",
    messagingSenderId: "524473621913",
    appId: "1:524473621913:web:096a772cc09743de680708"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {
    auth,
    db
}
