import { LoginTemplate } from 'components/templates';
import { LoginOrganism } from 'components/organisms';

const imageLogin =
	'https://raw.githubusercontent.com/edisonAlbaSarmiento/network-tests/master/src/assets/img/loginImage.jpg';

function LoginPage() {
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
