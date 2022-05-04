// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBTFlHpzAnvSzwWFRihN3TA8UENm5B6NFo',
	authDomain: 'redsocial-97946.firebaseapp.com',
	databaseURL: 'https://redsocial-97946.firebaseio.com',
	projectId: 'redsocial-97946',
	storageBucket: 'redsocial-97946.appspot.com',
	messagingSenderId: '612726792028',
	appId: '1:612726792028:web:d2d5c1dd6f65d8db33eb99',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
