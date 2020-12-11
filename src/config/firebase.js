import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyBqUB86oK5LPcD28NOfalLMII7zS3SShCQ",
    authDomain: "chat-app-c133b.firebaseapp.com",
    databaseURL: "https://chat-app-c133b.firebaseio.com",
    projectId: "chat-app-c133b",
    storageBucket: "chat-app-c133b.appspot.com",
    messagingSenderId: "14266251634",
    appId: "1:14266251634:web:fab629816957b27f9f45eb"
}

firebase.initializeApp(firebaseConfig)

export default firebase