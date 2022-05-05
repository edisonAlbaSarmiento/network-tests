import { useEffect, useState } from 'react';
import { HomeTemplate } from 'components/templates';
import { HomeOrganism, HeaderOrganism } from 'components/organisms';
import { useSelector, useDispatch } from 'react-redux';

import { logoutAsync, selectUserLogin } from 'redux-service/services';
import {
	getPostAllAsync,
	selectAllPost,
	getCommentsPostActionAsync,
	selectCommentsPost,
	getUserDataByPostActionAsync,
	selectUserDataByPost,
} from 'redux-service/services/post';

function HomePage() {
	const dateLoginUser = useSelector<any>(selectUserLogin);
	const listPost = useSelector(selectAllPost);
	console.log('POST', listPost);
	const listCommentsPost = useSelector(selectCommentsPost);
	console.log('listCommentsPost', listCommentsPost);
	const dataByUserPost = useSelector(selectUserDataByPost);
	console.log('dataByUserPost', dataByUserPost);
	const dispatch = useDispatch();

	const [selectItem, setItem] = useState<any>(null);
	const [selectIdUser, setIdUser] = useState<any>(null);

	useEffect(() => {
		dispatch<any>(getPostAllAsync());
	}, [dispatch]);

	useEffect(() => {
		if (selectItem !== null) {
			dispatch<any>(getCommentsPostActionAsync(selectItem.id));
		}
	}, [dispatch, selectItem]);

	useEffect(() => {
		if (selectIdUser) {
			dispatch<any>(getUserDataByPostActionAsync(selectIdUser));
		}
	}, [dispatch, selectIdUser]);

	const logOut = () => {
		dispatch<any>(logoutAsync());
	};

	// const selectItemAction = (item: any) => {
	// 	console.log('selectItem', selectItem);
	// };
	console.log('selectItem', selectItem);

	return (
		<HomeTemplate
			header={
				<HeaderOrganism
					dataUserLogin={dateLoginUser}
					actionLogout={() => logOut()}
				/>
			}
			body={
				<HomeOrganism
					dataCard={listPost?.data}
					selectItem={setItem}
					setIdUser={setIdUser}
				/>
			}
		/>
	);
}
export default HomePage;
