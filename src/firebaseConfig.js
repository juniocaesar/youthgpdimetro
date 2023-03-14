import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCy7Y9x4t6J6PNsg5YoN8mqUPfpFZAuW90",
	authDomain: "youthgpdimetro-908f3.firebaseapp.com",
	databaseURL:
		"https://youthgpdimetro-908f3-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "youthgpdimetro-908f3",
	storageBucket: "youthgpdimetro-908f3.appspot.com",
	messagingSenderId: "846976590389",
	appId: "1:846976590389:web:56de3108829170c872877c",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
