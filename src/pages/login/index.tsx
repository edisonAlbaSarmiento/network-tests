import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {
	getAuth,
	signInWithPopup,
	OAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { LoginTemplate } from 'components/templates';
import { LoginOrganism } from 'components/organisms';

const imageLogin = require('assets/img/loginImage.jpg');

function LoginPage() {
	let navigate = useNavigate();
	const [user, setUser] = useState<any>({ isLogin: false, name: '' || null });

	const onClick = (typeLogin: 'google' | 'facebook' | 'twitter' | 'github') => {
		const auth = getAuth();
		const authProvider = new OAuthProvider(`${typeLogin}.com`);

		signInWithPopup(auth, authProvider)
			.then((result) => {
				setUser({ isLogin: true, name: result.user.displayName });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const logOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => console.log('success'))
			.catch((err) => console.error(err));
	};

	const getUser = () => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			console.log('USER', user);
			if (user) {
				setUser({ isLogin: true, name: user.displayName });
			} else {
				setUser({ isLogin: false, name: '' });
			}
		});
	};

	useEffect(() => {
		getUser();
	}, []);
	console.log('user', user);
	return (
		<LoginTemplate
			rightImage={imageLogin}
			leftContent={
				<LoginOrganism title='Welcome Back' subTitle='Login to your account' />
			}
		/>
	);
}

export default LoginPage;
