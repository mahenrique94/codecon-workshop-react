import firebase from 'firebase/app'
import firebaseConfig from '../credentials.json'

import 'firebase/auth'
import 'firebase/database'

let FIREBASE_APP = null

const init = () => {
    if (!FIREBASE_APP) {
        FIREBASE_APP = firebase.initializeApp(firebaseConfig)
    }
}

const getApp = () => FIREBASE_APP

export { init, getApp }
