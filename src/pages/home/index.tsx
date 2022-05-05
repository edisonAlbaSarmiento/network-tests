import { HomeTemplate } from 'components/templates';
import { HomeOrganism, HeaderOrganism } from 'components/organisms';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAsync, selectUserLogin } from 'redux-service/services';

function HomePage() {
	const dateLoginUser = useSelector<any>(selectUserLogin);
	console.log('dateLoginUser HomePage', dateLoginUser);
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch<any>(logoutAsync());
	};

	return (
		<HomeTemplate
			header={
				<HeaderOrganism dataUserLogin={[]} actionLogout={() => logOut()} />
			}
			body={<HomeOrganism dataCard={[]} />}
		/>
	);
}
export default HomePage;
