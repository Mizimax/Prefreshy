import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBRyid6SozEgoLHSkk1AD_t1T4lkDhQSmQ",
    authDomain: "pre-freshy-2018.firebaseapp.com",
    databaseURL: "https://pre-freshy-2018.firebaseio.com",
    projectId: "pre-freshy-2018",
    storageBucket: "pre-freshy-2018.appspot.com",
    messagingSenderId: "502604765422"
};
const firebase = Firebase.initializeApp(config);

export const db = firebase.database();