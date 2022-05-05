import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { showErrorAction, showLoaderAction } from 'redux-service/services';

const API_URL = 'https://dummyapi.io/data/v1';

const endpoints = {
	getDataByUserLogin: 'user/:id',
	getByAllPost: '/post',
	filterByTag: '/tag/:id/post',
	showCommentPost: '/post/:id/comment',
	getDataByUserPost: 'user/:id',
};

// POST

const postSlide = createSlice({
	name: 'post',
	initialState: {
		postList: null,
		commentsPost: [],
		userDataByPost: null,
		showError: false,
		loader: false,
	},
	reducers: {
		saveDataPostAllAction: (state: any, action: any) => {
			console.log('saveDataPostAllAction', action);
			state.postList = action.payload;
		},
		saveCommentsPostAction: (state: any, action: any) => {
			state.commentsPost = action.payload;
		},
		saveUserDataByPostAction: (state: any, action: any) => {
			state.userDataByPost = action.payload;
		},
	},
});

const getPostAllAsync = () => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));

		await axios({
			method: 'get',
			url: `${API_URL}/post?limit=10`,
			headers: {
				'app-id': '62728f494dd3cece326fff39',
			},
			// data: {
			// 	firstName: data.firstName,
			// 	lastName: data.lastName,
			// 	email: data.email,
			// },
		}).then((res: any) => {
			console.log('saveDataPostAllAction', res);

			dispatch(saveDataPostAllAction(res.data));
		});
	} catch (err) {
		console.log('ERROR', err);
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const getCommentsPostActionAsync = (data: any) => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));

		await axios({
			method: 'get',
			url: `${API_URL}/post/${data}/comment?limit=10`,
			headers: {
				'app-id': '62728f494dd3cece326fff39',
			},
			// data: {
			// 	firstName: data.firstName,
			// 	lastName: data.lastName,
			// 	email: data.email,
			// },
		}).then((res: any) => {
			console.log('saveCommentsPostAction', res);

			dispatch(saveCommentsPostAction(res.data));
		});
	} catch (err) {
		console.log('ERROR', err);
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const getUserDataByPostActionAsync = (data: any) => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));

		await axios({
			method: 'get',
			url: `${API_URL}/user/${data}`,
			headers: {
				'app-id': '62728f494dd3cece326fff39',
			},
			// data: {
			// 	firstName: data.firstName,
			// 	lastName: data.lastName,
			// 	email: data.email,
			// },
		}).then((res: any) => {
			console.log('saveUserDataByPostAction', res);

			dispatch(saveUserDataByPostAction(res.data));
		});
	} catch (err) {
		console.log('ERROR', err);
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const {
	saveDataPostAllAction,
	saveCommentsPostAction,
	saveUserDataByPostAction,
}: any = postSlide.actions;
interface Stateprops {
	post: {
		postList: any;
		commentsPost: any;
		userDataByPost: any;
		showError: boolean;
		loader: boolean;
	};
}
//selectors
const selectAllPost = (state: Stateprops) => state.post.postList;
const selectCommentsPost = (state: Stateprops) => state.post.commentsPost;
const selectUserDataByPost = (state: Stateprops) => state.post.userDataByPost;

const selectError = (state: Stateprops) => state.post.showError;
const selectLoader = (state: Stateprops) => state.post.loader;

export {
	selectLoader,
	selectAllPost,
	selectCommentsPost,
	selectUserDataByPost,
	selectError,
	getCommentsPostActionAsync,
	getUserDataByPostActionAsync,
	getPostAllAsync,
};
export default postSlide.reducer;
