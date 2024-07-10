// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDtgsHOteu1Rer1HVqU88z95MuvS_vlcOc",
  authDomain: "fir-test-e4283.firebaseapp.com",
  projectId: "fir-test-e4283",
  storageBucket: "fir-test-e4283.appspot.com",
  messagingSenderId: "337081203752",
  appId: "1:337081203752:web:e601cf8ba54e9b175a091d"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Initialize Auth using the Firebase App instance

export { auth }; // Export auth for use in other parts of your application
export default app; // Export the Firebase app instance