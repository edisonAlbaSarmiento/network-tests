import { useState, useEffect } from 'react';
import {
	getAuth,
	signInWithPopup,
	OAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';
import { TitleComponet, ButtosSocialMedia } from 'components/atoms';
import { ContentImage, Image, ContentIcons } from './styled';
import { useSelector, useDispatch } from 'react-redux';

import {
	getLoginUserAsync,
	selectUserLogin,
	selectLoader,
	selectError,
	selectIsLoggin,
} from 'redux-service/services';

type LoginMoleculeProps = {
	title?: string | undefined;
	subTitle?: string;
};

function LoginMolecule({ title, subTitle }: LoginMoleculeProps): JSX.Element {
	const [user, setUser] = useState<any>({ isLogin: false, name: '' || null });
	const selectUserLoginDATA = useSelector<any>(selectUserLogin);
	const stateLoader = useSelector<any>(selectLoader);
	const stateError = useSelector<any>(selectError);
	const stateLoggin = useSelector<any>(selectIsLoggin);
	console.log('stateLoggin', stateLoggin);

	console.log('stateLoader', stateLoader);
	console.log('stateError', stateError);

	const dispatch = useDispatch();

	console.log('selectUserLoginDATA', selectUserLoginDATA);
	const onClick = (typeLogin: 'google' | 'facebook' | 'twitter' | 'github') => {
		const auth = getAuth();
		const authProvider = new OAuthProvider(`${typeLogin}.com`);

		signInWithPopup(auth, authProvider)
			.then((result) => {
				setUser({ isLogin: true, name: result.user.displayName });
				console.log(result.user);
				const data = {
					firstName:
						result?.user?.displayName !== null
							? result?.user?.displayName
							: 'Sin nombre',
					lastName:
						result?.user?.displayName !== null
							? result?.user?.displayName
							: 'Sin nombre',
					email: result?.user?.email,
				};
				dispatch<any>(getLoginUserAsync(data));
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const getUser = () => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			console.log('USER', user);
			if (user) {
				dispatch<any>(getLoginUserAsync(user));
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
			</ContentIcons>
		</>
	);
}

export default LoginMolecule;
