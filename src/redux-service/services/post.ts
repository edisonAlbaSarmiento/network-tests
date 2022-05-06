import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { showErrorAction, showLoaderAction } from 'redux-service/services';

const API_URL = process.env.REACT_APP_API_URL;

const APP_ID = process.env.REACT_APP_ID;

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
			state.postList = action.payload;
		},
		saveCommentsPostAction: (state: any, action: any) => {
			state.commentsPost = action.payload;
		},
		saveUserDataByPostAction: (state: any, action: any) => {
			state.userDataByPost = action.payload;
		},
		saveFilterByTagPostAction: (state: any, action: any) => {
			state.postList = action.payload;
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
				'app-id': `${APP_ID}`,
			},
		}).then((res: any) => {
			dispatch(saveDataPostAllAction(res.data));
			dispatch(showLoaderAction(false));
		});
	} catch (err) {
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
				'app-id': `${APP_ID}`,
			},
		}).then((res: any) => {
			dispatch(saveCommentsPostAction(res.data));
			dispatch(showLoaderAction(false));
		});
	} catch (err) {
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
				'app-id': `${APP_ID}`,
			},
		}).then((res: any) => {
			dispatch(saveUserDataByPostAction(res.data));
			dispatch(showLoaderAction(false));
		});
	} catch (err) {
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const getFilterTagByPostActionAsync = (data: any) => async (dispatch: any) => {
	try {
		dispatch(showLoaderAction(true));

		await axios({
			method: 'get',
			url: `${API_URL}/tag/${data}/post`,
			headers: {
				'app-id': `${APP_ID}`,
			},
		}).then((res: any) => {
			dispatch(saveFilterByTagPostAction(res.data));
			dispatch(showLoaderAction(false));
		});
	} catch (err) {
		dispatch(showErrorAction(false));
		dispatch(showLoaderAction(false));
	}
};

const {
	saveDataPostAllAction,
	saveCommentsPostAction,
	saveUserDataByPostAction,
	saveFilterByTagPostAction,
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
	getFilterTagByPostActionAsync,
};
export default postSlide.reducer;
