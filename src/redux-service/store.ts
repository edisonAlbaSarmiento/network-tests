import { configureStore } from '@reduxjs/toolkit';
import todoSlide from 'redux-service/services/test';
import userSlide from 'redux-service/services';
import postSlide from 'redux-service/services/post';

export default configureStore({
	reducer: {
		todo: todoSlide,
		user: userSlide,
		post: postSlide,
	},
});
