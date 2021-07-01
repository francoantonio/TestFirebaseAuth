import { auth } from '../index.js';

export const createUserEmailAndPassword = (email, password) => {
	return auth().createUserWithEmailAndPassword('antoniofranco.dev@gmail.com', 'ElPepe');
};

export const loginUserEmail = (email, password) =>
	auth().signInWithEmailAndPassword(email, password);

export const loginWithGoogle = (provider) => {
	return new Promise((resolve, reject) => {
		auth()
			.signInWithPopup(provider)
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const SignOutFb = () => {
	auth()
		.signOut()
		.then(console.log('desloguedo'))
		.catch((error) => {
			console.error(error);
		});
};
export const currentUser = () => {
	return new Promise((resolve, reject) => {
		auth().currentUser ? resolve(auth().currentUser) : reject('Sin usuario logueado');
	});
};

export const UserActiveObs = () => {
	auth().onAuthStateChanged((user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			var uid = user.uid;
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
};
