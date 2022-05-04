import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signOut } from 'firebase/auth';
const API_URL = 'https://dummyapi.io/data/v1';

const endpoints = {
	createUser: '/user/create',
	getDataByUserLogin: 'user/:id',
	getByAllPost: '/post',
	filterByTag: '/tag/:id/post',
	showCommentPost: '/post/:id/comment',
	getDataByUserPost: 'user/:id',
};

// USER

interface createUserRequest {
	firstName: string;
	lastName: string;
	email: string;
}
const createUser = async ({
	firstName,
	lastName,
	email,
}: createUserRequest) => {
	console.info([firstName, lastName, email]);
	await axios({
		method: 'post',
		url: endpoints.createUser,
		data: {
			firstName: 'Edison',
			lastName: 'Alba',
			email: 'edison.alba@test.com',
		},
	}).then((res: any) => {
		console.log('Create user', res);
	});
};

const userSlide = createSlice({
	name: 'user',
	initialState: {
		data: null,
	},
	reducers: {
		saveDataLoginAction: (state: any, action: any) => {
			state.data.push(action.payload);
		},
		logoutDataAction: (state: any, action: any) => {
			state.data = null;
		},
	},
});

const getLoginUserAsync = (data: any) => async (dispatch: any) => {
	try {
		await axios({
			method: 'post',
			url: `${API_URL}${endpoints.createUser}`,
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
			},
		}).then((res: any) => {
			console.log('getLoginUserAsync', res);

			dispatch(saveDataLoginAction(res.data));
		});
	} catch (err) {
		console.log('ERROR', err);
	}
};

const logoutAsync = () => async (dispatch: any) => {
	try {
		// console.log(data);
		// const response = await axios.post(API_URL, data);
		// console.log(response);
		dispatch(logoutDataAction(null));
		const auth = getAuth();
		signOut(auth)
			.then(() => console.log('success dispatch'))
			.catch((err) => console.error(err));
	} catch (err: any) {
		console.log('ERROR', err);
	}
};

const { saveDataLoginAction, logoutDataAction }: any = userSlide.actions;
const selectUserLogin = (state: any) => state.user?.data;

export {
	createUser,
	selectUserLogin,
	saveDataLoginAction,
	getLoginUserAsync,
	logoutDataAction,
	logoutAsync,
};
export default userSlide.reducer;
