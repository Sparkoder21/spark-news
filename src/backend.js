import uuid from "uuid-random";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBr4njvtnb0zOmHVPV2Sl3ZUvDirCRvxOg",
    authDomain: "reactchaty.firebaseapp.com",
    projectId: "reactchaty",
    storageBucket: "reactchaty.appspot.com",
    messagingSenderId: "361316550872",
    appId: "1:361316550872:web:55f11adf5c7fc6bef02fad"
};
firebase.initializeApp(firebaseConfig);

function showData(setComments, setIsLoaded){
	const db = firebase.database();
	let data = [];

	db.ref("commentsData/").orderByChild("timestamp").on("value", (s) => {
		data = [];
		s.forEach((v, i) => {
			data.push(v.val());
		});
		setComments(data);
		setIsLoaded(true);
	});
}

function sendData(name, comment){
	const db = firebase.database();

	db.ref("commentsData/" + uuid()).set({
		name: `${name}`,
		message: `${comment}`,
		timestamp: firebase.database.ServerValue.TIMESTAMP
	});
}

export {showData, sendData};