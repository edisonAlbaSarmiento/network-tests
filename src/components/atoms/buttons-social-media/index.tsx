import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { ContentButtom } from './styled';

type ButtosSocialMediaProps = {
	type?: 'twitter' | 'google' | 'facebook' | 'github';
	onClick?: () => void;
};
function ButtosSocialMedia({
	type = 'google',
	onClick = () => {},
}: ButtosSocialMediaProps): JSX.Element {
	const IconShow = (): any => {
		switch (type) {
			case 'twitter':
				return (
					<FaTwitter
						style={{
							fontSize: '30',
							color: '#0066FF',
						}}
					/>
				);
			case 'google':
				return (
					<FcGoogle
						style={{
							fontSize: '30',
						}}
					/>
				);

			case 'facebook':
				return (
					<BsFacebook
						style={{
							fontSize: '30',
							color: '#098af0',
						}}
					/>
				);
			case 'github':
				return (
					<FaGithub
						style={{
							fontSize: '30',
						}}
					/>
				);
			default:
				break;
		}
	};
	return <ContentButtom onClick={onClick}>{IconShow()}</ContentButtom>;
}

export default ButtosSocialMedia;
