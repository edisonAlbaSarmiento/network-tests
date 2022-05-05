import { useEffect } from 'react';
import { HomeTemplate } from 'components/templates';
import { HomeOrganism, HeaderOrganism } from 'components/organisms';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAsync, selectUserLogin } from 'redux-service/services';
import { getPostAllAsync, selectAllPost } from 'redux-service/services/post';

function HomePage() {
	const dateLoginUser = useSelector<any>(selectUserLogin);
	const listPost = useSelector(selectAllPost);
	console.log('POST', listPost);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(getPostAllAsync());
	}, [dispatch]);

	const logOut = () => {
		dispatch<any>(logoutAsync());
	};

	const selectItem = (item: any) => {
		console.log('ITEM', item);
	};
	return (
		<HomeTemplate
			header={
				<HeaderOrganism
					dataUserLogin={dateLoginUser}
					actionLogout={() => logOut()}
				/>
			}
			body={
				<HomeOrganism dataCard={listPost?.data} selectItem={() => selectItem} />
			}
		/>
	);
}
export default HomePage;
