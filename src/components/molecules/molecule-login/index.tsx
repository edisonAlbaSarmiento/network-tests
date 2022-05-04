import { useState, useEffect } from 'react';
import {
	getAuth,
	signInWithPopup,
	OAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { TitleComponet, ButtosSocialMedia } from 'components/atoms';
import { ContentImage, Image, ContentIcons } from './styled';

type LoginMoleculeProps = {
	title?: string | undefined;
	subTitle?: string;
};

function LoginMolecule({ title, subTitle }: LoginMoleculeProps): JSX.Element {
	const [user, setUser] = useState<any>({ isLogin: false, name: '' || null });
	let navigate = useNavigate();

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
		<>
			<TitleComponet variant='title' fontSize='40px' alignText>
				{title}
			</TitleComponet>
			<TitleComponet
				variant='subtitle'
				fontSize='20px'
				alignText
				color='#9999'
				marginText='2%'>
				{subTitle}
			</TitleComponet>
			<ContentImage>
				<Image src='https://avatars3.githubusercontent.com/u/31748119?s=460&amp;u=5b533fd135904b8b25951011a0c3da20fe15b413&amp;v=4' />
			</ContentImage>
			<ContentIcons>
				<ButtosSocialMedia type='google' onClick={() => onClick('google')} />
				<ButtosSocialMedia type='twitter' onClick={() => onClick('twitter')} />
				<ButtosSocialMedia type='github' onClick={() => onClick('github')} />
				<ButtosSocialMedia
					type='facebook'
					onClick={() => onClick('facebook')}
				/>
				{user.isLogin && <button onClick={() => logOut()}>logOut</button>}
				<button onClick={() => navigate('/home')}>home</button>
			</ContentIcons>
		</>
	);
}

export default LoginMolecule;
