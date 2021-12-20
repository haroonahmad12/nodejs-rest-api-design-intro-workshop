// Import the functions you need from the SDKs you need
//const { initializeApp } = require("firebase/app");
//const { getAnalytics } = require("firebase/analytics");

const admin = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const {
  FB_API_KEY,
  FB_AUTHDOMAIN,
  FB_PROJECTID,
  FB_STORAGE_BUCKET,
  FB_MESSAGINGSENDERID,
  FB_APPID,
  FB_MEASUREMENT_ID,
} = process.env;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTHDOMAIN,
  projectId: FB_PROJECTID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGINGSENDERID,
  appId: FB_APPID,
  measurementId: FB_MEASUREMENT_ID,
};
const config = require("../config/config");

// Initialize Firebase
//const app = admin.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

module.exports = {
  //app: app,
  auth: auth,
  //analytics: analytics,
};
