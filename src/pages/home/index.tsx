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
	getFilterTagByPostActionAsync,
} from 'redux-service/services/post';

function HomePage() {
	const dateLoginUser = useSelector<any>(selectUserLogin);
	const listPost = useSelector(selectAllPost);
	const listCommentsPost = useSelector(selectCommentsPost);
	const dataByUserPost = useSelector(selectUserDataByPost);
	const dispatch = useDispatch();

	const [selectItem, setItem] = useState<any>(null);
	const [selectIdUser, setIdUser] = useState<any>(null);
	const [filterByTag, setFilterByTag] = useState<string>('');

	useEffect(() => {
		if (filterByTag === '') {
			dispatch<any>(getPostAllAsync());
		}
	}, [dispatch, filterByTag]);

	useEffect(() => {
		if (selectItem) {
			dispatch<any>(getCommentsPostActionAsync(selectItem.id));
		}
	}, [dispatch, selectItem]);

	useEffect(() => {
		if (selectIdUser) {
			dispatch<any>(getUserDataByPostActionAsync(selectIdUser));
		}
	}, [dispatch, selectIdUser]);

	useEffect(() => {
		if (filterByTag) {
			dispatch<any>(getFilterTagByPostActionAsync(filterByTag));
		}
	}, [dispatch, filterByTag]);

	const logOut = () => {
		dispatch<any>(logoutAsync());
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
				<HomeOrganism
					dataCard={listPost?.data}
					selectItem={setItem}
					setIdUser={setIdUser}
					filterByTag={filterByTag}
					setFilterByTag={setFilterByTag}
					listCommentsPost={listCommentsPost?.data}
					dataByUserPost={dataByUserPost}
				/>
			}
		/>
	);
}
export default HomePage;
