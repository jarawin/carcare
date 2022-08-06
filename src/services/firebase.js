import { initializeApp } from 'firebase/app';
import firebaseConfig from '../assets/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

const db = app.firestore();
const auth = app.auth();

export { auth };
export default db;
