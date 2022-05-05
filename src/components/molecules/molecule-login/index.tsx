import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { TitleComponet, ButtosSocialMedia, ToastInfo } from 'components/atoms';
import { ContentImage, Image, ContentIcons } from './styled';
import { useSelector, useDispatch } from 'react-redux';

import {
	getLoginUserAsync,
	showErrorAction,
	selectError,
} from 'redux-service/services';

type LoginMoleculeProps = {
	title?: string | undefined;
	subTitle?: string;
};

function LoginMolecule({ title, subTitle }: LoginMoleculeProps): JSX.Element {
	const stateError = useSelector<any>(selectError);
	const dispatch = useDispatch();
	const onClick = (typeLogin: 'google' | 'facebook' | 'twitter' | 'github') => {
		const auth = getAuth();
		const authProvider = new OAuthProvider(`${typeLogin}.com`);

		signInWithPopup(auth, authProvider)
			.then((result) => {
				if (result) {
					dispatch<any>(getLoginUserAsync());
				}
			})
			.catch((err) => {
				dispatch<any>(showErrorAction(true));
				console.error(err);
			});
	};

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
			<ToastInfo
				showMessage={stateError || false}
				actionCloseToast={() => dispatch<any>(showErrorAction(false))}
			/>
		</>
	);
}

export default LoginMolecule;
