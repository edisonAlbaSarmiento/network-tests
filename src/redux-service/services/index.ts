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
		data: [],
		showError: false,
		loader: false,
		isLogin: false,
	},
	reducers: {
		saveDataLoginAction: (state: any, action: any) => {
			console.log('saveDataLoginAction', state, action);

			state.data.push(action.payload);
		},
		logoutDataAction: (state: any, action: any) => {
			console.log('logoutDataAction', state, action);
			state.data = action.payload;
		},
		showErrorAction: (state: any, action: any) => {
			console.log('showErrorAction', state, action);
			state.showError = action.payload;
		},
		showLoaderAction: (state: any, action: any) => {
			console.log('showLoaderAction', state, action);
			state.loader = action.payload;
		},
		changeLoginAction: (state: any, action: any) => {
			console.log('changeLoginAction', state, action);
			state.isLogin = action.payload;
		},
	},
});

const getLoginUserAsync = (data: any) => async (dispatch: any) => {
	try {
		// await axios({
		// 	method: 'get',
		// 	url: `${API_URL}/user?limit=10`,
		// 	headers: {
		// 		'app-id': '62728f494dd3cece326fff39',
		// 	},
		// 	// data: {
		// 	// 	firstName: data.firstName,
		// 	// 	lastName: data.lastName,
		// 	// 	email: data.email,
		// 	// },
		// }).then((res: any) => {
		// 	console.log('getLoginUserAsync', res);

		// 	dispatch(saveDataLoginAction(res.data));
		// 	dispatch(showLoaderAction(false));
		// });
		dispatch(changeLoginAction(true));
		dispatch(saveDataLoginAction(data));
	} catch (err) {
		console.log('ERROR', err);
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const logoutAsync = () => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));

		// console.log(data);
		// const response = await axios.post(API_URL, data);
		// console.log(response);
		dispatch(logoutDataAction(null));
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				dispatch(showLoaderAction(false));
				dispatch(changeLoginAction(false));
				console.log('success dispatch');
			})
			.catch((err) => {
				console.error(err);
				dispatch(showLoaderAction(false));
				dispatch(changeLoginAction(false));
			});
	} catch (err: any) {
		dispatch(showLoaderAction(false));
		dispatch(showErrorAction(false));
		dispatch(changeLoginAction(false));

		console.log('ERROR', err);
	}
};

const {
	saveDataLoginAction,
	logoutDataAction,
	showErrorAction,
	showLoaderAction,
	changeLoginAction,
}: any = userSlide.actions;
interface Stateprops {
	user: {
		data: any;
		showError: boolean;
		loader: boolean;
		isLogin: boolean;
	};
}
//selectors
const selectUserLogin = (state: Stateprops) => state.user?.data;
const selectError = (state: Stateprops) => state.user?.loader;
const selectLoader = (state: Stateprops) => state.user?.showError;
const selectIsLoggin = (state: Stateprops) => state.user?.isLogin;

export {
	createUser,
	selectUserLogin,
	selectLoader,
	selectIsLoggin,
	selectError,
	saveDataLoginAction,
	getLoginUserAsync,
	logoutDataAction,
	logoutAsync,
};
export default userSlide.reducer;
