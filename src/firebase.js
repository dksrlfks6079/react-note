import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAiLCUZ1qsYIyJZhtcxBwsWeCgCrWTsHGg",
    authDomain: "kiran-note-app.firebaseapp.com",
    projectId: "kiran-note-app",
    storageBucket: "kiran-note-app.appspot.com",
    messagingSenderId: "690617418244",
    appId: "1:690617418244:web:138c81893f3d2cb70cab51",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
