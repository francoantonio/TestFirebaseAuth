import { firebaseConfig } from './config/config.js';
import {
	createUserEmailAndPassword,
	loginWithGoogle,
	SignOutFb,
	currentUser,
	loginUserEmail,
} from './Auth/auth.js';
import { showAlert, renderLogin, renderHome } from './render/render.js';
firebase.initializeApp(firebaseConfig);

export const { auth } = firebase;
const providerGoogle = new firebase.auth.GoogleAuthProvider();

auth().onAuthStateChanged((data) => {
	if (data) {
		renderLogin(data);
		document.querySelector('#salir').addEventListener('click', SignOutFb);
	} else {
		renderHome();
		const alertNodo = document.querySelector('#alert-test');
		const logoutEmail = document.querySelector('#LogoutWhitEmail');
		const loginGmail = document.querySelector('#LogoutGoogle');
		const regisEmail = document.querySelector('#sendDataRegistro');
		// ...
		const clickAuthEmail = () => {
			console.log('test');
			const { value: valueEmail } = document.querySelector('#Email');
			const { value: valuePassword } = document.querySelector('#Password');
			!valueEmail || !valuePassword
				? showAlert(alertNodo, 'Los Campos no pueden estar en blanco')
				: loginUserEmail(valueEmail, valuePassword, auth)
						.then((data) => {
							user = data;
							showAlert(alertNodo, data, 'success');
						})
						.catch((err) => {
							console.log(err);
							showAlert(alertNodo, err);
						});
		};
		const clickRegistro = () => {
			const nodoShow = document.querySelector('#AlerRegis');
			const [{ value: rEmail }, { value: rPassword }, { value: rpPassword }] =
				document.querySelectorAll('.RPassword');
			console.log(rEmail);
			!rEmail || !rPassword || !rpPassword
				? showAlert(nodoShow, 'Tiene que completar todos los campos')
				: !(rPassword === rpPassword)
				? showAlert(nodoShow, 'Las contraseñas no coinciden')
				: createUserEmailAndPassword(rEmail, rPassword)
						.then(() => {
							logoutEmail();
							showAlert(
								nodoShow,
								'Registrado correctamente<br>Por Favor verifique su casilla de Email'
							);
						})
						.catch((error) => showAlert(nodoShow, error));
		};
		logoutEmail.addEventListener('click', clickAuthEmail);

		loginGmail.addEventListener('click', () => {
			loginWithGoogle(providerGoogle)
				.then((data) => {
					showAlert(alertNodo, 'Usuario Logueado Correctamente', 'success', 10000);
					return data;
				})
				.catch(console.err);
		});
		regisEmail.addEventListener('click', clickRegistro);
	}
});
